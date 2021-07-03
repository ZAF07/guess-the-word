/* eslint-disable import/no-cycle */
// import * as controller from '../index';

const selectors = {
  wordToGuess: document.getElementById('guess-word'),
  playerInput: document.getElementById('player-input'),
  solveButton: document.querySelector('.solve-btn'),
  score: document.getElementById('score'),
  username: document.getElementById('username'),
  newGameBtn: document.getElementById('newGame-btn'),
  roundsDisplay: document.querySelector('.rounds-display'),
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
