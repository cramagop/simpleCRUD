import { simpleCRUD } from '../../@types/simpleCRUD';
import {httpMessage, HttpCode } from '../services/httpMessage'
import { Validator } from 'jsonschema';
import { Collection, ObjectId } from "mongodb";
import { Request, Response } from 'express';

export default class mongoSimpleCRUD implements simpleCRUD.IsimpleCRUD{
    private options: simpleCRUD.mongoOptions;
    private validator: Validator
    private Collection: Collection;
    
    constructor({ options }: { options: simpleCRUD.mongoOptions; }) {
        this.options = options;
        this.validator = new Validator();
        this.Collection = this.options.DB.collection(options.DBCollection);
    }

    public  getAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const object = (await this.Collection.find({}).toArray() as any);
            res.status(HttpCode.Ok).send(httpMessage(HttpCode.Ok, object));
        } catch (error) {
            res.status(500).send(error);
        }
    };

    public createOne = async (req: Request, res: Response): Promise<void> => {
        try {
            const inputObject = this.validator.validate(req.body, this.options.Schema);
            if (!inputObject.valid) {throw inputObject.errors;}
    
            const newObject = inputObject.instance as any;
    
            const result = await this.Collection.insertOne(newObject);
    
            if(result.acknowledged) {
                res.status(HttpCode.Created).send(httpMessage(HttpCode.Created, result.insertedId));
            } else {
                res.status(HttpCode.InternalServerError).send("Failed to create a new object.");
            };
        } catch (error) {
            res.status(HttpCode.BadRequest).send(httpMessage(HttpCode.BadRequest, error));
        };
    };

    public getOne = async (req: Request, res: Response): Promise<void> => {
        const id = req?.params?.id;
        try {
            const query = { _id: new ObjectId(id) };
            const object: any = await this.Collection.findOne(query) as any;
            if (object) {res.status(200).send(object);}
        } catch (error) {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
        }
    };

    public modifyOne = async (req: Request, res: Response): Promise<void> => {
        const id = req?.params?.id;
        try {
            const inputObject = this.validator.validate(req.body, this.options.Schema);
            if (!inputObject.valid) {throw inputObject.errors;}
    
            const object: any = inputObject.instance as any;
    
            const query = { _id: new ObjectId(id) };
            const result = await this.Collection.updateOne(query, { $set: object });
    
            if(result.acknowledged) {
                res.status(201).send({"modifiedID":id});
            } else {
                res.status(500).send(`Object with id: ${id} not updated`);
            };
     
        } catch (error) {
            res.status(400).send(error);
        }
    };

    public deleteOne = async (req: Request, res: Response): Promise<void> => {
        const id = req?.params?.id;
        try {
            const query = { _id: new ObjectId(id) };
            const result = await this.Collection.deleteOne(query);
     
            if (result.acknowledged) {
                res.status(202).send(`Successfully removed game with id ${id}`);
            } else if (!result) {
                res.status(400).send(`Failed to remove game with id ${id}`);
            } else if (!result.deletedCount) {
                res.status(404).send(`Game with id ${id} does not exist`);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    };
}