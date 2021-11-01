const router = require('express').Router();
const { createPromoCode } = require('../controllers');
const { redeemCode } = require('../controllers');

router.post('/', createPromoCode);
router.post('/redeem', redeemCode);

module.exports = router;
