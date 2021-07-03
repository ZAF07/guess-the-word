import {resolve} from 'path';
import {words} from '../utils/game.mjs';

export const initControllers = () => {
  const game = (req, res) => {
    res.sendFile(resolve('client/dist', 'index.html'))
  }

  // Endpoint for retrieving all words for game
  const getWords = (req,res) => {
    res.json(words);
  }

  return {
    game,
    getWords
  }
}