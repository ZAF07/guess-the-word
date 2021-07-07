/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express from 'express';
import router from './routers/router.mjs';
import {} from 'dotenv/config';

const app = express();

app.use(express.static('client/public'));
app.use(express.static('client/public/dist'));
app.use(express.json());

app.use('/', router);

app.listen(process.env.PORT || 3000, console.log('http://localhost:3000'));
