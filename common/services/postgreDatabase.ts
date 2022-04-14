import { Database } from '../../@types/database';
import {Pool, PoolConfig, QueryResult} from 'pg'

export default class postgreDatabase implements Database.IpostgreDatabase {
    readonly POOL: Pool

    constructor ({ poolcfg }: {poolcfg: PoolConfig}) {
        this.POOL = new Pool(poolcfg);
    }

    readonly getClient = async () => {
        return await this.POOL.connect()
    }

    public query = async (request: string, parameter: Array<any>): Promise<QueryResult<any>> => {
        const client = await this.getClient();
        const object = await client.query(request, parameter);
        client.release();
        return object;
    }
}
