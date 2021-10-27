const router = require('express').Router();
const { getCategories, getSingleCategory } = require('../controllers');

router.get('/', getCategories);
router.get('/:categoryName', getSingleCategory);
module.exports = router;
