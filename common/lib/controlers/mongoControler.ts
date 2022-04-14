import mongoSimpleCRUD from '../../services/crud/mongoSimpleCRUD';
import database from '../database/dbmongo'
import { simpleCRUD } from '../../../@types/simpleCRUD'
import DB_CONF from '../../../conf/mongoConf'

const options: simpleCRUD.mongoOptions = {
    DB: database,
    DBCollection: DB_CONF.DB_COLLECTION,
    Schema: DB_CONF.DB_SCHEMA,
}

export default new mongoSimpleCRUD({options});