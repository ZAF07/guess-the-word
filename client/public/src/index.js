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
import './recources/styles/styles.css';
import selectors from './modules/view';
import { getWords, setNewPlayer } from './modules/api';
import { Game, Player } from './modules/class';
import Timer from './modules/timer';

let CurrentPlayer;
let CurrentGame;

/* ******************** GAME STARTS HERE ********************* */

// Creating new player for DB
selectors.signIn.addEventListener('click', async (e) => {
  selectors.newGameBtn.style.visibility = 'hidden';
  selectors.homePage.style.display = 'none';
  // Player info
  const userName = selectors.username.value;
  const password = selectors.password.value;
  CurrentPlayer = new Player(await setNewPlayer(userName, password));

  CurrentGame = new Game();
  CurrentGame.fullWord = await getWords();
  selectors.wordToGuess.innerText = CurrentGame.fullWord[CurrentGame.rounds];
  Timer(selectors.showMinute, selectors.showSeconds, selectors);
  selectors.timer.style.display = 'block';
});

// Event handler for creating a new game
selectors.newGameBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  selectors.newGameBtn.style.visibility = 'hidden';
  selectors.homePage.style.display = 'none';
  // setNewPlayer();
  console.log('click');
  // creates a new player object
  // CurrentPlayer = new Player(await setNewPlayer(userName, password));
  if (!CurrentPlayer) {
    CurrentPlayer = new Player('Guest');
  }

  CurrentGame = new Game();
  CurrentGame.fullWord = await getWords();
  selectors.wordToGuess.innerText = CurrentGame.fullWord[CurrentGame.rounds];
  Timer(selectors.showMinute, selectors.showSeconds, selectors);
  selectors.timer.style.display = 'block';
});

// Event handler for when user submits guessed word
selectors.playerInput.addEventListener('keyup', (event) => {
  // On enter key after player input word guess
  if (event.keyCode === 13) {
    // If player word matches word to guess
    if (selectors.playerInput.value === CurrentGame.fullWord[CurrentGame.rounds]) {
      // this.gameScore ++
      // Reset loosing streak
      CurrentGame.wrongGuessInRow = 0;
      // Add to wining streak
      CurrentGame.correctGuessInRow += 1;

      // Add score to player class based on number of streak
      // CurrentGame.correctGuessInRow % 3 === 0 ? CurrentPlayer.setThreeCorrectGuesses() : CurrentPlayer.setCorrectGuess();

      if (CurrentGame.correctGuessInRow === 3) {
        CurrentPlayer.setThreeCorrectGuesses();
      } else {
        CurrentPlayer.setCorrectGuess();
      }

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
    // Player input no match with word
    // Reset streak
    CurrentGame.correctGuessInRow = 0;
    // Add to losing streak
    CurrentGame.wrongGuessInRow += 1;

    // Subtract a point from player score based on number of consecutive misses
    // CurrentGame.wrongGuessInRow === 3 ? CurrentPlayer.setThreeWrongGuesses() : CurrentPlayer.setWrongGuess();
    if (CurrentGame.wrongGuessInRow === 3) {
      CurrentPlayer.setThreeWrongGuesses();
    } else {
      CurrentPlayer.setWrongGuess();
    }

    selectors.playerInput.value = '';
    selectors.score.innerText = CurrentPlayer.score;
  }
});

selectors.reset.addEventListener('click', () => {
  selectors.homePage.style.display = 'block';
  selectors.gamePage.style.display = 'block';
  selectors.gameSubHeader.style.display = 'block';
  selectors.newGameBtn.style.visibility = 'visible';
  selectors.endGame.style.display = 'none';
  selectors.reset.style.display = 'none';
});
