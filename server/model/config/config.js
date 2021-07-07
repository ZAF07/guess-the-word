module.exports = {
  development: {
    username: 'zaffere',
    password: null,
    database: 'jumble_words',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    host: 'DATABASE_URL',
    dialect: 'postgres',

  },
};
