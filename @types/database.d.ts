// External modules
import * as mongoDB from 'mongodb';
import { Pool, PoolConfig } from 'pg'

declare namespace Database {
    export interface ImongoDatabase {
        collection(collectionName: string): mongoDB.Collection;
        connect(): Promise<void>;
    }

    export interface IpostgreDatabase {
        POOL: Pool
        query(request: string, parameter: Array<any>): Promise<void>;
    }

    export type MongoDBConfig = {
        DB_URL: string,
        DB_OPTIONS: mongoDB.MongoClientOptions,
        DB_NAME: string
    }
}