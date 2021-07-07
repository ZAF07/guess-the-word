module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameColumn('games', 'user_id', 'player_id');
  },

};
