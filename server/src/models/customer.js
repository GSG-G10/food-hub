const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Customer = sequelize.define('customers', {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  customerName: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  customerFullAddress: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  customerPhone: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

module.exports = { Customer };
