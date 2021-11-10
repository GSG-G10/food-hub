const admin = require('../config/firebase');
const { HttpError } = require('../utils');

// eslint-disable-next-line consistent-return
exports.isAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const decodevalue = await admin
      .auth()
      .verifyIdToken(authorization.split(' ')[1]);
    req.user = decodevalue;
    if (decodevalue) return next();
    throw new HttpError(400, 'You are not authorized !');
  } catch (err) {
    next(new HttpError(400, 'You have to login in first!'));
  }
};
