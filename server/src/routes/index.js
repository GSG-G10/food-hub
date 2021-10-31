const router = require('express').Router();
const mealsRouter = require('./meals');
const categoryRouter = require('./categories');
const restaurantRouter = require('./restaurants');

const { auth } = require('../controllers');
const { decodeToken } = require('../middleware/privateRoute');

// router.post('/login', login);
router.get('/auth', decodeToken, auth);

router.use('/meals', mealsRouter);
router.use('/restaurant', restaurantRouter);
router.use('/category', categoryRouter);

module.exports = router;
