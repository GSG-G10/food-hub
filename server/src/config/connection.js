/* eslint-disable no-console */
require('env2')('.env');

const Sequelize = require('sequelize');

const { DB_URL, DEV_DB_URL, TEST_DB_URL, NODE_ENV } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'testing':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('No database found');
}
console.log(dbUrl);
const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  dialectOptions: {
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  },
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

sequelize.sync();

module.exports = {
  sequelize,
};
