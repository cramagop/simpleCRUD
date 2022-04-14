// External modules
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

// Routes modules
import mongoRouter from '../route/mongoRoute';
import postgreRouter from '../route/postgreRoute';
import DB_CONF from '../../../conf/mongoConf';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use(bodyParser.json());

// routes
app.use(`/${DB_CONF.DB_COLLECTION}`, mongoRouter);
app.use('/postgre', postgreRouter);

export { app };