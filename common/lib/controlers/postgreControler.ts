import postgreSimpleCRUD from '../../services/crud/postgreSimpleCRUD';
import { simpleCRUD } from '../../../@types/simpleCRUD'
import db from '../database/dbpostgre'
import DB_CONF from '../../../conf/postgreConf'

const options: simpleCRUD.postgreOptions = {
    Schema: DB_CONF.USERS_SCHEMA
}

export default new postgreSimpleCRUD({db, options});
