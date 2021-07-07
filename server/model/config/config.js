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
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    database: 'd8r60uah86jmrc',
    username: 'ufmkahwjukklgd',
    host: 'ec2-54-227-246-76.compute-1.amazonaws.com',
    password: 'DATABASE_PASSWORD',

    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },

  },
};
