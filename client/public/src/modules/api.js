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

const setNewPlayer = async () => {
  let name;
  console.log('setnewplaye');
  try {
    const { data } = await axios.post('/new-player');
    console.log('returned data db', data);
    name = data.name;
  } catch (error) {
    console.log(error);
  }
  return name;
};

export { getWords, setNewPlayer };
