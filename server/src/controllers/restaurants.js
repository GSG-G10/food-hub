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

const getRestaurant = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id <= 0)
      throw new HttpError(400, 'validation error, invalid restaurant id');
    const data = await Restaurant.findAll({
      where: {
        userId: id,
      },
    });

    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getRestaurants, getRestaurant };
