const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');
const { Category } = require('./category');
const { Restaurant } = require('./restaurant');

const Meal = sequelize.define('meals', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  images: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  restaurantId: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.DOUBLE,
  },
});

Meal.belongsTo(Restaurant, { foreignkey: 'restaurantId' });
Meal.belongsTo(Category, { foreignkey: 'categoryId' });

module.exports = { Meal };
