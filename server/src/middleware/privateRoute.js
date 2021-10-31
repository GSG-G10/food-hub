const admin = require('../config/firebase');

exports.decodeToken = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const decodevalue = await admin
      .auth()
      .verifyIdToken(authorization.split(' ')[1]);
    req.user = decodevalue;
    if (decodevalue) return next();
    return res
      .status(400)
      .json({ success: false, msg: 'You are not authorized!' });
  } catch (err) {
    return res.json({ success: false, msg: err });
  }
};
