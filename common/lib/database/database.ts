import { Database } from "../../../@types/database"
import DB from "../../../conf/dbconf";
import mongoDatabase from '../../services/mongoDatabase'

const db = new mongoDatabase({DB_Config: <Database.MongoDBConfig>(DB)});

db.connect();

export default db;

