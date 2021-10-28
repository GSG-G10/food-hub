const { auth } = require('./auth');
const { getMealsByCategory, getMealsByRestaurant } = require('./meals');
const { getCategories } = require('./categories');

module.exports = {
  auth,
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
};
