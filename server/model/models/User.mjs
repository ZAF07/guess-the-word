export default function userModel(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: DataTypes.DATE,
  },
  { underscored: true });
}
