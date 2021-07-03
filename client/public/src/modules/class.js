/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
// import selectors from './view';
// import getWords from './api';

export class Player {
  constructor(player) {
    this.player = player;
    this.score = 0;
  }

  setCorrectGuess() {
    this.score += 1;
    // selectors.score.innerText = this.score;
    console.log(`${this.player} correct guess: Score: ${this.score}`);
  }

  setThreeCorrectGuesses() {
    this.score += 3;
  }

  setWrongGuess() {
    this.score -= 1;
    // selectors.score.innerText = this.score;
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
    this.wrongGuessInRow = 0;
  }

  updateRounds() {
    if (this.rounds === this.fullWord.length - 1) {
      alert('Game Over');
      window.location.reload();
    }
    this.rounds += 1;
  }

  // gameLogic(playerInputValue, playerClass, event, selectors) {
  //   if (event.keyCode === 13) {
  //     if (playerInputValue === this.fullWord[this.rounds]) {
  //       // this.gameScore ++
  //       playerClass.setCorrectGuess(selectors);
  //       this.updateWord(selectors);
  //     } else {
  //       selectors.playerInput.value = '';
  //       //  gameScore -= 1
  //       playerClass.setWrongGuess(selectors);
  //     }
  //   }
  //   selectors.roundsDisplay.innerText = `Round ${Number(this.rounds) + 1}`;
  // }

  async init(getWords) {
    this.fullWord = await getWords();
    console.log('Game: ', this.fullWord);
    // player = new Player(name)
    // selectors.wordToGuess.innerText = this.fullWord[this.rounds];
  }
}
