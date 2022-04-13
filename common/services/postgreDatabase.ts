import { Database } from '../../@types/database';
import {Pool, PoolConfig} from 'pg'

export default class postgreDatabase implements Database.IpostgreDatabase {
    readonly POOL: Pool

    constructor ({ poolcfg }: {poolcfg: PoolConfig}) {
        this.POOL = new Pool(poolcfg);
    }

    public query = async (request: string, parameter: Array<any>): Promise<void> => {
        this.POOL.query(request, parameter);
    }
}
