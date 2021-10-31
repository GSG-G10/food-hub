const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const DiscountCode = sequelize.define('discountcodes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  discountType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  discountAmount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  expiresAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  promocode: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = { DiscountCode };
