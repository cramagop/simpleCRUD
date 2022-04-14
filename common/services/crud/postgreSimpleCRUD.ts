import { simpleCRUD } from '../../../@types/simpleCRUD';
import { Database } from '../../../@types/database';
import {httpMessage, HttpCode } from '../httpMessage'
import { Validator } from 'jsonschema';
import { Request, Response } from 'express';

export default class postgreSimpleCRUD implements simpleCRUD.IsimpleCRUD {
    private validator: Validator;
    private DB: Database.IpostgreDatabase;
    private options: simpleCRUD.postgreOptions;

    constructor ({ db, options }: {db: Database.IpostgreDatabase, options: simpleCRUD.postgreOptions}){
        this.DB = db;
        this.validator = new Validator();
        this.options = options
    }

    public  getAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const object = await this.DB.query('SELECT * FROM users ORDER BY id ASC');
            res.status(HttpCode.Ok).send(httpMessage(HttpCode.Ok, object['rows']));
        } catch (error) {
            res.status(500).send(error);
        }
    };

    public createOne = async (req: Request, res: Response): Promise<void> =>{
        try{
            const inputObject = this.validator.validate(req.body, this.options.Schema);
            if (!inputObject.valid) {throw inputObject.errors;}

            const { firstname, lastname, age } = inputObject.instance;

            const object = await this.DB.query('INSERT INTO users (lastname, firstname, age) VALUES ($1, $2, $3)',[firstname, lastname, age])
            console.log(object);
            res.status(200).send('ok');
            
        } catch (error) {
            res.status(HttpCode.BadRequest).send(httpMessage(HttpCode.BadRequest, error));
        }
    };

    public getOne = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        try {
            const object = await this.DB.query('SELECT * FROM users WHERE id = $1', [id]);
            res.status(HttpCode.Ok).send(httpMessage(HttpCode.Ok, object['rows']));
        } catch (error) {
            res.status(500).send(error);
        }
    };

    public modifyOne = async (req: Request, res: Response): Promise<void> => {
        try {
            const inputObject = this.validator.validate(req.body, this.options.Schema);
            if (!inputObject.valid) {throw inputObject.errors;}

            const id = req.params.id;
            const { firstname, lastname, age} = inputObject.instance;
            const object = await this.DB.query('UPDATE users SET firstname=$1, lastname=$2, age=$3 WHERE id = $4', [firstname, lastname, age, id]);
            res.status(201).send('ok');
        } catch (error) {
            res.status(400).send(error);
        }
    };

    public deleteOne = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;
            const object = await this.DB.query('DELETE FROM users WHERE id = $1', [id]);
            res.status(200).send('ok');
        } catch (error) {
            res.status(400).send(error);
        }
    };
    
}