import { simpleCRUD } from '../../@types/simpleCRUD';
import { Database } from '../../@types/database';
import {httpMessage, HttpCode } from '../services/httpMessage'
import { Validator } from 'jsonschema';
import { Request, Response } from 'express';

export default class postgreSimpleCRUD implements simpleCRUD.IsimpleCRUD {
    private validator: Validator;
    private DB: Database.IpostgreDatabase;

    constructor ({ db }: {db: Database.IpostgreDatabase}){
        this.DB = db;
        this.validator = new Validator();
    }

    public  getAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const object = await this.DB.query('SELECT * FROM users ORDER BY id ASC');
            res.status(HttpCode.Ok).send(httpMessage(HttpCode.Ok, object['rows']));
        } catch (error) {
            res.status(500).send(error);
        }
    };

    public createOne = async (req: Request, res: Response): Promise<void> =>{};
    public getOne = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        try {
            const object = await this.DB.query('SELECT * FROM users WHERE id = $1', [id]);
            res.status(HttpCode.Ok).send(httpMessage(HttpCode.Ok, object['rows']));
        } catch (error) {
            res.status(500).send(error);
        }

    };
    public modifyOne = async (req: Request, res: Response): Promise<void> => {};
    public deleteOne = async (req: Request, res: Response): Promise<void> => {};
    
}