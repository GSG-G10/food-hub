const router = require('express').Router();
const { getMealsByCategory, getMealsByRestaurant } = require('../controllers');

router.get('/category/:id', getMealsByCategory);
router.get('/restaurant/:id', getMealsByRestaurant);
module.exports = router;
