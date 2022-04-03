import { Database } from './database';
import { Request, Response } from 'express';

declare namespace simpleCRUD {

    export type jsonSchema = {};

    export type dataModel = {};

    export type simpleCRUD_Options = {
        DB: Database.IDatabase;
        DBCollection: string;
        Schema: jsonSchema;
    }

    export interface IsimpleCRUD {
        getAll(_res: Request, res: Response): Promise<void>;
        createOne(res: Request, req: Response): Promise<void>;
        getOne(res: Request, req: Response): Promise<void>;
        modifyOne(res: Request, req: Response): Promise<void>;
        deleteOne(res: Request, req: Response): Promise<void>;
    }
}