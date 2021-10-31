const router = require('express').Router();
const { redeemCode } = require('../controllers');

router.post('/', redeemCode);

module.exports = router;
