/* eslint-disable import/extensions */
import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import userModel from './User.mjs';
import gameModel from './Game.mjs';

const { Sequelize } = sequelizePackage;
// const env = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV || 'production';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.User = userModel(sequelize, Sequelize.DataTypes);
db.Game = gameModel(sequelize, Sequelize.DataTypes);

db.User.hasMany(db.Game);
db.Game.belongsTo(db.User);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
