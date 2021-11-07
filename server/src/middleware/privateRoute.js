const admin = require('../config/firebase');

// eslint-disable-next-line consistent-return
exports.isAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const decodevalue = await admin
      .auth()
      .verifyIdToken(authorization.split(' ')[1]);
    req.user = decodevalue;
    if (decodevalue) return next();
    return res.status(400).json({ msg: 'You are not authorized!' });
  } catch (err) {
    next(err);
  }
};
