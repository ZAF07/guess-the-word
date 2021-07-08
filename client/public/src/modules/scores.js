import { getNames, getScores } from './api';

const showScores = async (selectors) => {
  try {
    const scores = await getScores();
    const names = await getNames();

    while (selectors.scoreBoard.firstChild) {
      selectors.scoreBoard.removeChild(selectors.scoreBoard.firstChild);
    }

    for (let i = scores.length; i > 0; i += 1) {
      const currScore = scores[i];
      const currScoreId = scores[i].playerId;

      for (let j = names.length; j > 0; j += 1) {
        const currName = names[j];
        const currNameId = names[j].id;

        if (currScoreId === currNameId) {
          const li = document.createElement('li');
          li.classList.add('list-group-item');
          li.innerText = `${currName.name} ${currScore.gameScore} `;
          selectors.scoreBoard.appendChild(li);
        }
      }
    }
  } catch (error) {
    console.log('error in scores.js', error);
  }

  // console.log(scores);
  // console.log(names);
};
export default showScores;
