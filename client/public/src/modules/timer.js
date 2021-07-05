const startTimer = (minutes, seconds) => {
  let minute = 3;
  let second = 0;
  const toStartTimer = setInterval(() => {
    minutes.innerText = minute;
    seconds.innerText = second;

    if (second === 0 && minute !== 0) {
      minute -= 1;
      console.log('minute ', minute);
      second = 60;
      console.log('second ', minute);
      // IF MINUTES == 60 ? HOURS === +=1 MINUTES === 0
    } else if (minute === 0 && second === 0) {
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
