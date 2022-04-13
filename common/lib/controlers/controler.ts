import mongoSimpleCRUD from '../../services/mongoSimpleCRUD';
import database from '../database/database'
import { simpleCRUD } from '../../../@types/simpleCRUD'
import DB_CONF from '../../../conf/mongoConf'

const schema: simpleCRUD.jsonSchema = DB_CONF.DB_SCHEMA;

const options: simpleCRUD.simpleCRUD_Options = {
    DB: database,
    DBCollection: DB_CONF.DB_COLLECTION,
    Schema: schema,
}

export default new mongoSimpleCRUD({options});