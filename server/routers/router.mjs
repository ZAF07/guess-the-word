/* eslint-disable import/extensions */
import express from 'express';
import initControllers from '../controllers/index.mjs';

const router = express.Router();
const gameController = initControllers();

router.get('/', gameController.game);
router.get('/words', gameController.getWords);
router.get('/scores', gameController.getScores);
router.get('/name', gameController.getName);
router.post('/new-player', gameController.setNewPlayer);
router.post('/save-score', gameController.setRoundScore);

export default router;
