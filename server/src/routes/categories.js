const router = require('express').Router();
const { getCategories, getSingleCategory } = require('../controllers');

router.get('/', getCategories);
router.get('/:categoryId', getSingleCategory);
module.exports = router;
