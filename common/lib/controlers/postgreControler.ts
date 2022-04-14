import postgreSimpleCRUD from '../../services/postgreSimpleCRUD';
import db from '../database/dbpostgre'

/*const schema: simpleCRUD.jsonSchema = DB_CONF.DB_SCHEMA;

const options: simpleCRUD.mongoOptions = {
    DB: database,
    DBCollection: DB_CONF.DB_COLLECTION,
    Schema: schema,
}*/

export default new postgreSimpleCRUD({db});
