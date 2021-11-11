const router = require('express').Router();

const {
  getCategories,
  getMealById,
  getMealsByCategory,
  getMealsByRestaurant,
  getRestaurants,
  getRestaurant,
  addUser,
} = require('./controllers');
const { isAuth } = require('./middleware/privateRoute');
const { createPromoCode } = require('./controllers');
const { redeemCode } = require('./controllers');

router.post('/promo/redeem', isAuth, redeemCode);
router.post('/promo', isAuth, createPromoCode);
router.get('/meals/category/:id', getMealsByCategory);
router.get('/meals/restaurant/:id', getMealsByRestaurant);
router.get('/meals/:mealid', getMealById);
router.get('/restaurants/:id', getRestaurant);
router.get('/restaurants', getRestaurants);
router.get('/category', getCategories);
router.post('/user', addUser);

module.exports = router;
