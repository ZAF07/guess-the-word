import express from 'express';
import {initControllers} from '../controllers/index.mjs';

export const router = express.Router();
const gameRoute = initControllers();


router.get('/', gameRoute.game)