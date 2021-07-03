import express from 'express';
import {initControllers} from '../controllers/index.mjs';

export const router = express.Router();
const  gameController = initControllers();


router.get('/', gameController.game);
router.get('/words', gameController.getWords);