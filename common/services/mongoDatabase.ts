import { Database } from "../../@types/database"
import * as mongoDB from "mongodb";

export default class mongoDatabase implements Database.IDatabase{
    private client: mongoDB.MongoClient | undefined;
    private DB: mongoDB.Db;
    private db_options: mongoDB.MongoClientOptions

    constructor({ DB_Config }: { DB_Config: Database.DB_Config; }) {
       this.db_options = DB_Config.DB_OPTIONS;
       this.client = new mongoDB.MongoClient(DB_Config.DB_URL, this.db_options);
       this.DB = this.client.db(DB_Config.DB_NAME);
    };

    public collection = (collName: string): mongoDB.Collection => {
        return this.DB.collection(collName);
    };

    public connect = async (): Promise<void> => {
        try{
            if (this.client != undefined) {
                    await this.client.connect();
                    console.log(`connected to "${this.DB.databaseName}" database`);
            }
        } catch (error) {
            console.log({"in mongoDB.TS":error})
        }
    };
};