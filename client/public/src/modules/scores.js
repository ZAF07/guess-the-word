const showScores = async (selectors, getScores, getNames) => {
  const scores = await getScores();
  const names = await getNames();
  // console.log(scores);
  // console.log(names);

  while (selectors.scoreBoard.firstChild) {
    selectors.scoreBoard.removeChild(selectors.scoreBoard.firstChild);
  }

  for (let i = 0; i < scores.length; i += 1) {
    const currScore = scores[i];
    const currScoreId = scores[i].playerId;

    for (let j = 0; j < names.length; j += 1) {
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
};
export default showScores;
