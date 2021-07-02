/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/public/src/index.js":
/*!************************************!*\
  !*** ./client/public/src/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _modules_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view.js */ \"./client/public/src/modules/view.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// RULES \n\n/*\nPlayer given a certain amount of time to guess as many words as possible\n\nEach correct guess wins one point\n\nEvery 5 in a row gets 3 points\n\nMiss three and get 3 points shaved\n*/\n// Game logic\n\n/*\n Start game\n End game\n*/\n// Helper functions \n\n/*\nCheck for win\nCheck for loose \nCheck win 5 in row -- Add 3 points\nCheck loose 3 in row -> minus 3 points \n*/\n// SetTimeout function -> 3mins?\n// Global variables\n\n/*\n Player score\n*/\n// PLAYER ACTIONS\n\n/*\n Player can click solve button\n\n*/\n\nvar Player = /*#__PURE__*/function () {\n  function Player(player) {\n    _classCallCheck(this, Player);\n\n    this.player = player;\n    this.score = 0;\n  }\n\n  _createClass(Player, [{\n    key: \"setCorrectGuess\",\n    value: function setCorrectGuess() {\n      this.score++;\n      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.selectors.score.innerText = this.score;\n      console.log(\"\".concat(this.player, \" correct guess: Score: \").concat(this.score));\n    }\n  }, {\n    key: \"setThreeCorrectGuesses\",\n    value: function setThreeCorrectGuesses() {\n      this.score += 3;\n    }\n  }, {\n    key: \"setWrongGuess\",\n    value: function setWrongGuess() {\n      this.score -= 1;\n      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.selectors.score.innerText = this.score;\n      console.log(\"\".concat(this.player, \" wrong guess: Score: \").concat(this.score));\n    }\n  }, {\n    key: \"setThreeWrongGuesses\",\n    value: function setThreeWrongGuesses() {\n      this.score - 3;\n    }\n  }]);\n\n  return Player;\n}();\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.rounds = 0;\n    this.gameStart = false;\n    this.fullWord = ['java', 'bane', 'joker', 'phone'];\n  }\n\n  _createClass(Game, [{\n    key: \"updateRounds\",\n    value: function updateRounds() {\n      this.rounds += 1;\n    }\n  }, {\n    key: \"gameLogic\",\n    value: function gameLogic(playerInputValue, playerClass, event) {\n      if (event.keyCode === 13) {\n        if (playerInputValue === this.fullWord[this.rounds]) {\n          // this.gameScore ++\n          playerClass.setCorrectGuess();\n          this.updateWord();\n        } else {\n          _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.selectors.playerInput.value = ''; //  gameScore -= 1\n\n          playerClass.setWrongGuess();\n        }\n      }\n    }\n  }, {\n    key: \"updateWord\",\n    value: function updateWord() {\n      if (this.rounds == this.fullWord.length - 1) {\n        alert('Game Over');\n        window.location.reload();\n      }\n\n      this.rounds++;\n      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.selectors.wordToGuess.innerText = this.fullWord[this.rounds];\n      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.selectors.playerInput.value = '';\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      // player = new Player(name)\n      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.selectors.wordToGuess.innerText = this.fullWord[this.rounds];\n    }\n  }]);\n\n  return Game;\n}();\nconsole.log('Hello game'); // const updateWord = () => {\n//     if (rounds == fullWord.length - 1) {\n//     alert('Game Over')\n//     window.location.reload()\n//   }\n//   rounds ++\n//   dom.selectors.wordToGuess.innerText = fullWord[rounds];\n//   dom.selectors.playerInput.value = '';\n// }\n// export const gameLogic = (playerInputValue, playerClass, gameClass, event ) => {\n//   if (event.keyCode === 13) {\n//     if (playerInputValue == gameClass.fullWord[rounds]){\n//       gameScore ++\n//       playerClass.setCorrectGuess()\n//       dom.selectors.score.innerText = gameClass.gameScore\n//       updateWord()\n//     } \n//     else {\n//       dom.selectors.playerInput.value = '';\n//       gameScore -= 1;\n//       playerClass.setWrongGuess()\n//       dom.selectors.score.innerText = gameScore\n//     }\n//   }\n// }\n// const fullWord = ['java', 'bane', 'joker', 'phone']\n// let rounds = 0;\n// let gameStart = false\n// let gameScore = 0\n// let player;\n// start game\n// export const init = (name) => {\n//   // player = new Player(name)\n//   dom.selectors.wordToGuess.innerText = fullWord[rounds]\n// }\n// Function to create a new player (after clicking start button)\n// export const newPlayer = (name) => {\n//    player = new Player(name);\n//    const game = new Game()\n//   return {player, game}\n// }\n\n//# sourceURL=webpack://jumbled-word-game/./client/public/src/index.js?");

/***/ }),

/***/ "./client/public/src/modules/view.js":
/*!*******************************************!*\
  !*** ./client/public/src/modules/view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectors\": () => (/* binding */ selectors)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./client/public/src/index.js\");\n\nvar selectors = {\n  wordToGuess: document.getElementById('guess-word'),\n  playerInput: document.getElementById('player-input'),\n  solveButton: document.querySelector('.solve-btn'),\n  score: document.getElementById('score'),\n  username: document.getElementById('username'),\n  newGameBtn: document.getElementById('newGame-btn')\n};\nvar player;\nvar game;\nselectors.newGameBtn.addEventListener('click', function (e) {\n  //creates a new player object\n  player = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Player(selectors.username.value);\n  game = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Game();\n  game.init();\n});\nselectors.playerInput.addEventListener('keyup', function (event) {\n  game.gameLogic(selectors.playerInput.value, player, event);\n});\n\n//# sourceURL=webpack://jumbled-word-game/./client/public/src/modules/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./client/public/src/index.js");
/******/ 	
/******/ })()
;