module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('games', 'game_score',
      {
        type: Sequelize.INTEGER,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('game_score');
  },
};
