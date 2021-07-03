/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-cycle */
// RULES
/*
Player given a certain amount of time to guess as many words as possible

Each correct guess wins one point

Every 5 in a row gets 3 points

Miss three and get 3 points shaved
*/

// Game logic
/*
 Start game
 End game
*/
// Helper functions
/*
Check for win
Check for loose
Check win 5 in row -- Add 3 points
Check loose 3 in row -> minus 3 points
*/

// SetTimeout function -> 3mins?

// Global variables
/*
 Player score
*/

// PLAYER ACTIONS
/*
 Player can click solve button

*/

import selectors from './modules/view';
import getWords from './modules/api';
import { Game, Player } from './modules/class';

let CurrentPlayer;
let CurrentGame;

// Event handler for creating a new game
selectors.newGameBtn.addEventListener('click', async () => {
  // creates a new player object
  CurrentPlayer = new Player(selectors.username.value);
  CurrentGame = new Game();
  // await CurrentGame.init(getWords);
  CurrentGame.fullWord = await getWords();
  selectors.wordToGuess.innerText = CurrentGame.fullWord[CurrentGame.rounds];
});

// Event handler for when user submits guessed word
selectors.playerInput.addEventListener('keyup', (event) => {
  // const playerGuessInput = selectors.playerInput.value;
  // game.gameLogic(playerGuessInput, player, event);
  // On enter key after player input word guess
  if (event.keyCode === 13) {
    // If player word matches word to guess
    if (selectors.playerInput.value === CurrentGame.fullWord[CurrentGame.rounds]) {
      // this.gameScore ++
      // Add score to player class
      CurrentPlayer.setCorrectGuess(selectors);
      // Update player score on screen
      selectors.score.innerText = CurrentPlayer.score;
      // Update round of game
      // (also being used as index to iterate through fullWord array to display word)
      CurrentGame.updateRounds();
      // Update the word to guess displayed on screen
      selectors.wordToGuess.innerText = CurrentGame.fullWord[CurrentGame.rounds];
      selectors.playerInput.value = '';
      return;
    }
    CurrentGame.wrongGuessInRow += 1;

    // Subtract a point from player score based on number of consecutive misses
    CurrentGame.wrongGuessInRow === 3 ? CurrentPlayer.setThreeWrongGuesses() : CurrentPlayer.setWrongGuess();
    selectors.playerInput.value = '';
    selectors.score.innerText = CurrentPlayer.score;
  }
});
