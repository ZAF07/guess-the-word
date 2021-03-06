/* eslint-disable import/no-cycle */
// import * as controller from '../index';

const selectors = {
  wordToGuess: document.getElementById('guess-word'),
  playerInput: document.getElementById('player-input'),
  solveButton: document.querySelector('.solve-btn'),
  score: document.getElementById('score'),
  scoreBoard: document.getElementById('score-board'),
  username: document.getElementById('username'),
  newGameBtn: document.getElementById('newGame-btn'),
  modalButton: document.getElementById('modal-btn'),
  roundsDisplay: document.querySelector('.rounds-display'),
  gamePage: document.querySelector('.game-page'),
  homePage: document.querySelector('.home-page'),
  password: document.getElementById('password'),
  userName: document.getElementById('username'),
  showHour: document.getElementById('show-hour'),
  showMinute: document.getElementById('show-minute'),
  showSeconds: document.getElementById('show-seconds'),
  signIn: document.getElementById('sign-in-btn'),
  endGame: document.getElementById('end-game'),
  gameSubHeader: document.getElementById('game-subheader'),
  reset: document.getElementById('reset'),
  timer: document.getElementById('timer'),
  correctGuessOne: document.getElementById('correct-one'),
  correctGuessThree: document.getElementById('correct-three'),
  wrongGuessOne: document.getElementById('wrong-one'),
  wrongGuessThree: document.getElementById('wrong-three'),
  userNameDisplay: document.getElementById('username-display'),
};

// let player;
// let game;

// selectors.newGameBtn.addEventListener('click', (e) => {
//   // creates a new player object

//   player = new controller.Player(selectors.username.value);
//   game = new controller.Game();
//   game.init();
// });

// selectors.playerInput.addEventListener('keyup', (event) => {
//   const playerGuessInput = selectors.playerInput.value;
//   game.gameLogic(playerGuessInput, player, event);
// });

export default selectors;
