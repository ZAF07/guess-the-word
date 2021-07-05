/* eslint-disable no-console */
import axios from 'axios';

// Get words for game
const getWords = async () => {
  let words;
  try {
    const { data } = await axios.get('http://localhost:3000/words');
    words = data;
  } catch (error) {
    console.log('error from API', error);
  }
  return words;
};

const setNewPlayer = async (userName, password) => {
  console.log(userName, password);
  let name;
  console.log('setnewplaye');
  try {
    const { data } = await axios.post('/new-player', { userName, password });
    console.log('returned data db', data);
    name = data;
  } catch (error) {
    console.log(error);
  }
  return name;
};

export { getWords, setNewPlayer };
