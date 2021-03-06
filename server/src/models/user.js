const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    // autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  accountType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { User };
