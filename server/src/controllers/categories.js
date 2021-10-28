const { Category } = require('../models');
const { HttpError } = require('../utils');

const getCategories = async (req, res, next) => {
  let { page, items } = req.query;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    page = page || 1;
    items = items || 10;
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
