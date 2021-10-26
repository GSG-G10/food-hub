const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Restaurant = sequelize.define('restaurants', {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  restaurantName: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  restaurantFullAddress: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  restaurantPhone: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  lat: {
    type: Sequelize.DOUBLE,
  },
  lon: {
    type: Sequelize.DOUBLE,
  },
  logoUrl: {
    type: Sequelize.TEXT,
  },
  contactEmail: {
    type: Sequelize.STRING,
  },
});

module.exports = { Restaurant };
