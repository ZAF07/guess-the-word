/* eslint-disable import/extensions */
import { resolve } from 'path';
import { words } from '../utils/game.mjs';
import db from '../model/models/index.mjs';

const initControllers = () => {
  const game = (req, res) => {
    res.sendFile(resolve('client/dist', 'index.html'));
  };

  // Endpoint for retrieving all words for game
  const getWords = (req, res) => {
    res.json(words);
  };

  const setNewPlayer = async (req, res) => {
    // Check if user exists
    // If not, create new else retrieve player info
    const { dataValues } = await db.User.create({ name: 'zaffere' });
    res.json(dataValues);
    res.end();
  };

  return {
    game,
    getWords,
    setNewPlayer,
  };
};

export default initControllers;
