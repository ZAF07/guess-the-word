import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import userModel from './User.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.User = userModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
