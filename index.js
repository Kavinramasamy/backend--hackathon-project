 import express from 'express';
 import cors from 'cors';
 import {} from 'dotenv/config.js';
 import { db_connect } from './Router/db.js';
 import { Routerpage } from './Router/Routerpage.js';



 db_connect;
 const app = express()

 app.use(cors({origin:"*"}));
 app.use(express.json());



app.use('/',Routerpage);

 app.listen(process.env.PORT,()=>console.log('server is listening',6000));


