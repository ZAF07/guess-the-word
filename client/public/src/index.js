/* eslint-disable no-param-reassign */
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
import {
  getWords, setNewPlayer, setRoundScore, getScores, getNames,
} from './modules/api';
import { Game, Player } from './modules/class';
import scrambleText from './modules/scramble';
import guessMsg from './modules/correctScoreMsg';
import Timer from './modules/timer';
import showScores from './modules/scores';

let CurrentPlayer;
let CurrentGame;

/* ******************** GAME STARTS HERE ********************* */

// Creating new player for DB
selectors.signIn.addEventListener('click', async () => {
  selectors.newGameBtn.style.visibility = 'hidden';
  selectors.homePage.style.display = 'none';

  // Player info
  const userName = selectors.username.value;
  const password = selectors.password.value;
  const newPlayer = await setNewPlayer(userName, password);
  console.log('haha', newPlayer);
  CurrentPlayer = new Player(newPlayer.name, newPlayer.id);
  console.log(CurrentPlayer);

  CurrentGame = new Game();
  CurrentGame.fullWord = await getWords();
  //  SCRAMBLE GOES HERE
  selectors.wordToGuess.innerText = scrambleText(CurrentGame.fullWord[CurrentGame.rounds]);
  Timer(CurrentPlayer, selectors, setRoundScore, showScores, getScores, getNames);
  selectors.timer.style.display = 'block';
  selectors.modalButton.style.display = 'none';
});

// Event handler for creating a new game
selectors.newGameBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  selectors.newGameBtn.style.visibility = 'hidden';
  selectors.homePage.style.display = 'none';
  selectors.modalButton.style.display = 'none';

  // creates a new player object
  if (!CurrentPlayer) {
    CurrentPlayer = new Player('Guest');
    selectors.userNameDisplay.innerText = `Playing as ${CurrentPlayer.player}`;
  }

  CurrentGame = new Game();
  CurrentGame.fullWord = await getWords();
  selectors.wordToGuess.innerText = scrambleText(CurrentGame.fullWord[CurrentGame.rounds]);
  Timer(CurrentPlayer, selectors, setRoundScore, showScores, getScores, getNames);
  selectors.timer.style.display = 'block';
});

// Event handler for when user submits guessed word
selectors.playerInput.addEventListener('keyup', (event) => {
  // On enter key after player input word guess
  if (event.keyCode === 13) {
    // If player word matches word to guess
    if (selectors.playerInput.value === CurrentGame.fullWord[CurrentGame.rounds]) {
      // Add score to player class based on number of streak

      if (CurrentGame.correctGuessInRow === 3) {
        selectors.correctGuessThree.style.display = 'block';
        guessMsg('correct-three', selectors);
        CurrentGame.correctGuessInRow = 0;
        CurrentPlayer.setThreeCorrectGuesses();
      } else {
        CurrentPlayer.setCorrectGuess();
        selectors.correctGuessOne.style.display = 'block';
        guessMsg('correct-one', selectors);
      }

      //  Send correct guess msg

      // this.gameScore ++
      // Reset loosing streak
      CurrentGame.wrongGuessInRow = 0;
      // Add to wining streak
      CurrentGame.correctGuessInRow += 1;

      // Update player score on screen
      selectors.score.innerText = CurrentPlayer.score;

      // Update round of game
      // (also being used as index to iterate through fullWord array to display word)
      CurrentGame.updateRounds();
      // Update the word to guess displayed on screen
      selectors.wordToGuess.innerText = scrambleText(CurrentGame.fullWord[CurrentGame.rounds]);
      selectors.playerInput.value = '';
      return;
    }
    // Player input no match with word
    // Reset streak
    CurrentGame.correctGuessInRow = 0;
    // Add to losing streak
    CurrentGame.wrongGuessInRow += 1;

    // Subtract a point from player score based on number of consecutive misses

    if (CurrentGame.wrongGuessInRow === 3) {
      CurrentGame.wrongGuessInRow = 0;
      CurrentPlayer.setThreeWrongGuesses();
      selectors.wrongGuessThree.style.display = 'block';
      guessMsg('wrong-three', selectors);
    } else {
      CurrentPlayer.setWrongGuess();
      selectors.wrongGuessOne.style.display = 'block';
      guessMsg('wrong-one', selectors);
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

showScores(selectors, getScores, getNames);
getNames();
