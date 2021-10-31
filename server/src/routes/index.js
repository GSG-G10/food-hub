const router = require('express').Router();
const mealsRouter = require('./meals');
const categoryRouter = require('./categories');
const restaurantRouter = require('./restaurants');
const promoCodeRouter = require('./promocode');
const redeemRouter = require('./redeemRouter');
const { auth } = require('../controllers');
const { decodeToken } = require('../middleware/privateRoute');

router.get('/auth', decodeToken, auth);
router.post('/promocode', decodeToken, promoCodeRouter);
router.post('/redeem', decodeToken, redeemRouter);
router.use('/meals', mealsRouter);
router.use('/restaurant', restaurantRouter);
router.use('/category', categoryRouter);

module.exports = router;
