const {
  getMealsByCategory,
  getMealsByRestaurant,
  getMealById,
} = require('./meals');
const { auth } = require('./auth');
const { getCategories } = require('./categories');
const { getRestaurants, getRestaurant } = require('./restaurants');
const { createPromoCode } = require('./createPromocode');
const { redeemCode } = require('./redeemCode');
const { addUser } = require('./addUser');

module.exports = {
  auth,
  getMealsByCategory,
  getMealsByRestaurant,
  getCategories,
  getMealById,
  getRestaurants,
  createPromoCode,
  redeemCode,
  getRestaurant,
  addUser,
};
