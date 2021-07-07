/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const startTimer = (currentPlayer, selectors) => {
  let minute = 1;
  let second = 0;
  const toStartTimer = setInterval(() => {
    selectors.showMinute.innerText = minute;
    selectors.showSeconds.innerText = second;

    if (second === 0 && minute !== 0) {
      minute -= 1;
      console.log('minute ', minute);
      second = 60;
      console.log('second ', minute);
      // IF MINUTES == 60 ? HOURS === +=1 MINUTES === 0
    } else if (minute === 0 && second === 0) {
      selectors.homePage.style.display = 'block';
      selectors.gamePage.style.display = 'none';
      selectors.gameSubHeader.style.display = 'none';
      selectors.endGame.style.display = 'block';
      selectors.reset.style.display = 'block';
      selectors.timer.style.display = 'none';
      selectors.score.innerText = '';
      selectors.wordToGuess.innerText = '';
      selectors.playerInput.value = '';
      currentPlayer.score = 0;

      // hours += 1;
      // minutes = 0;
      // showMsgFunc('Game about to end timer message', 'red');
      clearInterval(toStartTimer);
      setTimeout(() => {
        // location.reload();
        console.log('timer end');
      }, 5000);
    }
    second -= 1;
  }, 1000);
};
export default startTimer;
