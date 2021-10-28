const { Category } = require('../models');
const { HttpError } = require('../utils');

const getCategories = async (req, res, next) => {
  const { page = 1, items = 10 } = req.query;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );

    const count = await Category.count();
    const data = await Category.findAll({
      offset: (page - 1) * items,
      limit: items,
    });

    res.json({ count, data });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories };
