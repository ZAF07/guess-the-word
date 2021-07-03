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

export default getWords;
