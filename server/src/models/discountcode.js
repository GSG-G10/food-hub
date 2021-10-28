const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const DiscountCode = sequelize.define('discountcode', {
  mealId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'meals',
      key: 'id',
    },
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
