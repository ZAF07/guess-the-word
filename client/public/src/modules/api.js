/* eslint-disable no-console */
import axios from 'axios';

// Get words for game
const getWords = async () => {
  let words;
  try {
    const { data } = await axios.get('/words');
    words = data;
  } catch (error) {
    console.log('error from API', error);
  }
  return words;
};

const setNewPlayer = async (userName, password) => {
  console.log(userName, password);
  let name;
  let id;
  console.log('setnewplaye');
  try {
    const { data } = await axios.post('/new-player', { userName, password });
    console.log('returned data db', data);
    name = data.name;
    id = data.id;
  } catch (error) {
    console.log(error);
  }
  return { name, id };
};

const setRoundScore = async (player) => {
  console.log('api setropundscore', player.score, player.id);
  const done = await axios.post('/save-score', {
    score: player.score,
    id: player.id,
  });
  return done;
};

const getScores = async () => {
  const { data } = await axios.get('/scores');
  console.log('data from getScores -> ', data);
  return data;
};

const getNames = async () => {
  const data = await axios.get('/name');
  return data.data;
};

export {
  getWords, setNewPlayer, setRoundScore, getScores, getNames,
};
