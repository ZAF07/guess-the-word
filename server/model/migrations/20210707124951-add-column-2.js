module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('games', 'user_id',
      {
        type: Sequelize.INTEGER,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('game_score');
  },
};
