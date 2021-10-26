const router = require('express').Router();

const { auth } = require('./controllers');
const { decodeToken } = require('./middleware/privateRoute');

// router.post('/login', login);
router.get('/auth', decodeToken, auth);

module.exports = router;
