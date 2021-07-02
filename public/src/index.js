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

import * as dom from './modules/view.js';

export class Player {
  constructor(player) {
    this.player = player
    this.score = 0
  }

  setCorrectGuess() {
    this.score ++;
    dom.selectors.score.innerText = this.score
    console.log(`${this.player} correct guess: Score: ${this.score}`);
  }

  setThreeCorrectGuesses() {
    this.score += 3
  }

  setWrongGuess() {
    this.score -= 1;
    dom.selectors.score.innerText = this.score
    console.log(`${this.player} wrong guess: Score: ${this.score}`);
  }

  setThreeWrongGuesses() {
    this.score - 3;
  }
}

export class Game {
  constructor() {
    this.rounds = 0
    this.gameStart = false
    this.fullWord = ['java', 'bane', 'joker', 'phone']
  }
  
   updateRounds() {
    this.rounds += 1;
  }

  gameLogic(playerInputValue, playerClass, event) {
    if (event.keyCode === 13) {
      if (playerInputValue === this.fullWord[this.rounds]) {
        // this.gameScore ++
        playerClass.setCorrectGuess();
        this.updateWord()
      }
      else {
       dom.selectors.playerInput.value = ''; 
        //  gameScore -= 1
       playerClass.setWrongGuess() 
      }
    }
  }

  updateWord() {
    if (this.rounds == this.fullWord.length - 1) {
      alert('Game Over')
      window.location.reload()
    }
    this.rounds ++
    dom.selectors.wordToGuess.innerText = this.fullWord[this.rounds];
    dom.selectors.playerInput.value = ''; 
  }
  init() {

    // player = new Player(name)
    dom.selectors.wordToGuess.innerText = this.fullWord[this.rounds]

  }

}

// const updateWord = () => {
//     if (rounds == fullWord.length - 1) {
//     alert('Game Over')
//     window.location.reload()
//   }
//   rounds ++
//   dom.selectors.wordToGuess.innerText = fullWord[rounds];
//   dom.selectors.playerInput.value = '';
// }

// export const gameLogic = (playerInputValue, playerClass, gameClass, event ) => {
//   if (event.keyCode === 13) {
//     if (playerInputValue == gameClass.fullWord[rounds]){
      
//       gameScore ++
//       playerClass.setCorrectGuess()
//       dom.selectors.score.innerText = gameClass.gameScore
//       updateWord()
//     } 
//     else {
//       dom.selectors.playerInput.value = '';
//       gameScore -= 1;
//       playerClass.setWrongGuess()
//       dom.selectors.score.innerText = gameScore
//     }
//   }
// }

// const fullWord = ['java', 'bane', 'joker', 'phone']
// let rounds = 0;
// let gameStart = false
// let gameScore = 0
// let player;





// start game
// export const init = (name) => {
//   // player = new Player(name)
//   dom.selectors.wordToGuess.innerText = fullWord[rounds]
// }

// Function to create a new player (after clicking start button)
// export const newPlayer = (name) => {
//    player = new Player(name);
//    const game = new Game()
//   return {player, game}
// }


 