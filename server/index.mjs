import express from 'express'
import {router} from './routers/router.mjs';

const app = express();

app.use(express.static('client/public'));
app.use(express.static('client/public/dist'));

app.use('/', router);

app.listen(3000, console.log('http://localhost:3000'));

