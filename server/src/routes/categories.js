const router = require('express').Router();
const { getCategories, getSingleCategory } = require('../controllers');

router.get('/', getCategories);
router.get('/:id', getSingleCategory);
module.exports = router;
