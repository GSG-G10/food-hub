const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
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
