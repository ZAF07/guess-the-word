export default function gameModel(sequelize, DataTypes) {
  return sequelize.define('game', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.STRING,
      references: {
        model: 'users',
        required: true,
      },
    },
    gameScore: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: DataTypes.DATE,
  },
  { underscored: true });
}
