import DB from '../../../conf/postgreConf';
import postgreDatabase from '../../services/postgreDatabase';
import { PoolConfig} from 'pg';


export default new postgreDatabase({poolcfg: <PoolConfig>(DB.DB_CONF)});;

