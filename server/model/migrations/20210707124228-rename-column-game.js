module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameColumn('games', 'player_id', 'user_id');
  },

};
