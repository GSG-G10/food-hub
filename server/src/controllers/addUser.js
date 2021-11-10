const { User } = require('../models');

exports.addUser = async (req, res, next) => {
  const { id, email, accountType } = req.body;
  try {
    await User.create({
      id,
      email,
      accountType,
    });
    console.log('here', req.body);
    res.json({ msg: 'New user has been added successfully ' });
  } catch (err) {
    next(err);
  }
};
