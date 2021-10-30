const router = require('express').Router();
const mealsRouter = require('./meals');
const categoryRouter = require('./categories');
const restaurantRouter = require('./restaurants');
const promocodeRouter = require('./promocode');
const { auth } = require('../controllers');
const { decodeToken } = require('../middleware/privateRoute');

router.get('/auth', decodeToken, auth);
router.post('promocode', decodeToken, promocodeRouter);
router.use('/meals', mealsRouter);
router.use('/restaurant', restaurantRouter);
router.use('/category', categoryRouter);

module.exports = router;
