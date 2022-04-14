// External modules
import {Collection, MongoClientOptions} from 'mongodb';
import { Pool, PoolClient, PoolConfig, QueryResult } from 'pg'

declare namespace Database {
    export interface ImongoDatabase {
        collection(collectionName: string): Collection;
        connect(): Promise<void>;
    }

    export interface IpostgreDatabase {
        POOL: Pool
        getClient(): Promise<PoolClient>;
        query(request: string, parameter?: Array<any>): Promise<QueryResult<any>>;
    }

    export type MongoDBConfig = {
        DB_URL: string,
        DB_OPTIONS: MongoClientOptions,
        DB_NAME: string
    }
}