const { User } = require('../models');

exports.addUser = async (req, res, next) => {
  const { id, username, email, accountType } = req.body;
  try {
    await User.create({
      id,
      username,
      email,
      accountType,
    });

    res.json({ msg: 'New user has been added successfully ' });
  } catch (err) {
    next(err);
  }
};
