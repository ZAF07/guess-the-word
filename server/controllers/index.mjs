/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { resolve } from 'path';
import words from '../utils/game.mjs';
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
        console.log('returnung new user -> ', dataValues.name);
        const { name, id } = dataValues;
        res.json({ name, id });
        res.end();
        return;
      }
      console.log('Returnbung existing user --> ', existingUser[0].dataValues.name);

      const userToReturn = {
        name: existingUser[0].dataValues.name,
        id: existingUser[0].dataValues.id,
      };

      res.json(userToReturn);
    } catch (error) {
      console.log('CONTROLLER setNewPlayer ERROR --> ', error);
    }
  };

  const setRoundScore = async (req, res) => {
    const { score, id } = req.body;
    const done = await db.Game.create({
      playerId: id,
      gameScore: score,
    });
    return done;
  };

  const getScores = async (req, res) => {
    // const names = await db.User.findAll();
    // const scores = await db.Game.findAll();

    const gameData = await db.Game.findAll({
      include: db.User,

    });
    // console.log('here--> ', s);

    const scores = [];

    gameData.forEach((data) => {
      scores.push(data.dataValues);
    });

    // console.log(scores);

    res.json(scores);
  };

  const getName = async (req, res) => {
    const data = await db.User.findAll({
      attr1: 'name',
      attr2: 'id'
      ,
    });
    console.log('name ---> ', data);
    res.json(data);
  };

  return {
    game,
    getWords,
    setNewPlayer,
    setRoundScore,
    getScores,
    getName,
  };
};

export default initControllers;
