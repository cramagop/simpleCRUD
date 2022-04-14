import postgreSimpleCRUD from '../../services/crud/postgreSimpleCRUD';
import db from '../database/dbpostgre'

//const schema: simpleCRUD.jsonSchema = DB_CONF.DB_SCHEMA;

export default new postgreSimpleCRUD({db});
