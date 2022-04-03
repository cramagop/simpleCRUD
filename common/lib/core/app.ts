// External modules
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

// Routes modules
import router from '../route/route';
import DB_CONF from '../../../conf/dbconf'

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// routes
app.use(`/${DB_CONF.DB_COLLECTION}`, router);

export { app };