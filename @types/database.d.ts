// External modules
import * as mongoDB from 'mongodb';
import {Pool, PoolConfig } from 'pg'

const POOLCFG: PoolConfig = {
    host: 'srv-db-postgre.postgres.database.azure.com',
    user: 'user1',
    password: 'ornikar',
    max: 5,
    database: 'persons',
    port: 'userdb',
    ssl: false
}

const POOL: Pool = new Pool(POOLCFG);

declare namespace Database {
    export interface ImongoDatabase {
        collection(collectionName: string): mongoDB.Collection;
        connect(): Promise<void>;
    }

    export interface IpostgreDatabase {
        PoolCfg: PoolConfig
        ClientPool: Pool
    }

    export type MongoDBConfig = {
        DB_URL: string,
        DB_OPTIONS: mongoDB.MongoClientOptions,
        DB_NAME: string
    }
}