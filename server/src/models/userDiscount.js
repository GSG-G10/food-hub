const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const UserDiscounts = sequelize.define('userdiscount', {
  userid: {
    type: Sequelize.STRING,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  promocode: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: 'discountcodes',
      key: 'id',
    },
  },
});

module.exports = { UserDiscounts };
