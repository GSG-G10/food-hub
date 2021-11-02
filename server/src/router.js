const router = require('express').Router();

const {
  getCategories,
  getMealById,
  getMealsByCategory,
  getMealsByRestaurant,
  getRestaurants,
  getRestaurant,
  searchRestaurant,
} = require('./controllers');
const { auth } = require('./controllers');
const { decodeToken } = require('./middleware/privateRoute');
const { createPromoCode } = require('./controllers');
const { redeemCode } = require('./controllers');

router.post('/promo/redeem', redeemCode);
router.get('/auth', decodeToken, auth);
router.post('/promo', decodeToken, createPromoCode);
router.get('/meals/category/:id', getMealsByCategory);
router.get('/meals/restaurant/:id', getMealsByRestaurant);
router.get('/meals/:mealid', getMealById);
router.get('/restaurants/search/:name', searchRestaurant);
router.get('/restaurants/:id', getRestaurant);
router.get('/restaurants', getRestaurants);
router.get('/category', getCategories);

module.exports = router;
