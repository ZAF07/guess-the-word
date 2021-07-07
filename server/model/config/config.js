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
    password: 'aa03f3c410f06c9fc94f28e95d4d074c0eba29340ba5553321a71e85f2a5f40f',

    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },

  },
};
