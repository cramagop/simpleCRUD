// External modules
import * as mongoDB from "mongodb";

declare namespace Database {
    export interface IDatabase {
        collection(collectionName: string): mongoDB.Collection;
        connect(): Promise<void>;
    }

    export type DB_Config = {
        DB_URL: string,
        DB_OPTIONS: mongoDB.MongoClientOptions,
        DB_NAME: string
    }
}