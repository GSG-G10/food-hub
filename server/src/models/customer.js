const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Customer = sequelize.define('customers', {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  customerName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  customerFullAddress: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  customerPhone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Customer };
