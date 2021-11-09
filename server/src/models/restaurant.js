const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Restaurant = sequelize.define('restaurant', {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  restaurantName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  restaurantFullAddress: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  restaurantPhone: {
    type: Sequelize.STRING,
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
