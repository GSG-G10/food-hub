const { getMealsByCategory, getMealsByRestaurant } = require('./meals');
const { getCategories } = require('./categories');
const { getMealById } = require('./meal');

module.exports = {
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
  getMealById,
};
