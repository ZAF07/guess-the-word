/* eslint-disable import/extensions */
import { resolve } from 'path';
import { words } from '../utils/game.mjs';
import * as auth from '../utils/auth.mjs';
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
    const { userName, password } = req.body;
    console.log('This is name and password controller --> ', userName, password);
    try {
      // Check if user exists
      const existingUser = await db.User.findAll({
        where: {
          name: userName,
        },
      });

      if (!existingUser.length) {
        // If not, create new else retrieve player info

        const hashedPassword = auth.hashPassword(password);

        const { dataValues } = await db.User.create({
          name: userName,
          password: hashedPassword,
        });
        res.json(dataValues.name);
        res.end();
        return;
      }

      res.json(existingUser);
    } catch (error) {
      console.log('CONTROLLER setNewPlayer ERROR --> ', error);
    }
  };

  return {
    game,
    getWords,
    setNewPlayer,
  };
};

export default initControllers;
