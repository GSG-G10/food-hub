const { Restaurant } = require('../models');
const { HttpError } = require('../utils');

const getRestaurants = async (req, res, next) => {
  const { page = 1, items = 10 } = req.query;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );

    const [count, data] = await Promise.all([
      Restaurant.count(),
      Restaurant.findAll({
        offset: (page - 1) * items,
        limit: items,
      }),
    ]);

    res.json({ count, data });
  } catch (err) {
    next(err);
  }
};

module.exports = { getRestaurants };
