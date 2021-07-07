/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const startTimer = (currentPlayer, selectors, setRoundScore, showScores, getScores, getNames) => {
  const minute = 0;
  let second = 10;
  const toStartTimer = setInterval(() => {
    selectors.showMinute.innerText = minute;
    selectors.showSeconds.innerText = second;

    // if (second === 0 && minute !== 0) {
    //   minute -= 1;
    //   console.log('minute ', minute);
    //   second = 60;
    //   console.log('second ', minute);
    // IF MINUTES == 60 ? HOURS === +=1 MINUTES === 0
    // } else
    if (minute === 0 && second === 0) {
      currentPlayer.player != 'Guest' ? showScores(selectors, getScores, getNames) : '';
      if (currentPlayer.player != 'Guest') {
        showScores(selectors, getScores, getNames);
      }

      selectors.homePage.style.display = 'block';
      selectors.gamePage.style.display = 'none';
      selectors.gameSubHeader.style.display = 'none';
      selectors.endGame.style.display = 'block';
      selectors.reset.style.display = 'block';
      selectors.modalButton.style.display = 'block';
      selectors.timer.style.display = 'none';
      selectors.score.innerText = '';
      selectors.wordToGuess.innerText = '';
      selectors.playerInput.value = '';
      setRoundScore(currentPlayer);
      currentPlayer.score = 0;
      console.log('name of player', currentPlayer.player);

      console.log('from timer --> ', currentPlayer);

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
