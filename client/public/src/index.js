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

export class Player {
  constructor(player) {
    this.player = player;
    this.score = 0;
  }

  setCorrectGuess() {
    this.score += 1;
    selectors.score.innerText = this.score;
    console.log(`${this.player} correct guess: Score: ${this.score}`);
  }

  setThreeCorrectGuesses() {
    this.score += 3;
  }

  setWrongGuess() {
    this.score -= 1;
    selectors.score.innerText = this.score;
    console.log(`${this.player} wrong guess: Score: ${this.score}`);
  }

  setThreeWrongGuesses() {
    this.score -= 3;
  }
}

export class Game {
  constructor() {
    this.rounds = 0;
    this.gameStart = false;
    this.fullWord = null;
  }

  updateRounds() {
    this.rounds += 1;
  }

  gameLogic(playerInputValue, playerClass, event) {
    if (event.keyCode === 13) {
      if (playerInputValue === this.fullWord[this.rounds]) {
        // this.gameScore ++
        playerClass.setCorrectGuess();
        this.updateWord();
      } else {
        selectors.playerInput.value = '';
        //  gameScore -= 1
        playerClass.setWrongGuess();
      }
    }
    selectors.roundsDisplay.innerText = `Round ${Number(this.rounds) + 1}`;
  }

  updateWord() {
    if (this.rounds === this.fullWord.length - 1) {
      alert('Game Over');
      window.location.reload();
    }
    this.rounds += 1;
    selectors.wordToGuess.innerText = this.fullWord[this.rounds];
    selectors.playerInput.value = '';
  }

  async init() {
    this.fullWord = await getWords();
    console.log('Game: ', this.fullWord);
    // player = new Player(name)
    selectors.wordToGuess.innerText = this.fullWord[this.rounds];
  }
}
