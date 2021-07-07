/* eslint-disable no-param-reassign */
const guessMsg = (guess, selectors) => {
  switch (guess) {
    case 'correct-one':
      setTimeout(() => {
        selectors.correctGuessOne.style.display = 'none';
      }, 1000);
      break;
    case 'correct-three':
      setTimeout(() => {
        selectors.correctGuessThree.style.display = 'none';
      }, 1000);
      break;
    case 'wrong-three':
      setTimeout(() => {
        selectors.wrongGuessThree.style.display = 'none';
      }, 1000);
      break;
    case 'wrong-one':
      setTimeout(() => {
        selectors.wrongGuessOne.style.display = 'none';
      }, 1000);
      break;

    default:
      break;
  }
};

export default guessMsg;
