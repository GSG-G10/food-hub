const router = require('express').Router();
const { getRestaurants } = require('../controllers');

router.get('/', getRestaurants);
module.exports = router;
