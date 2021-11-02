const { Op } = require('sequelize');
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

    const [count, data] = await Promise.all([
      Category.count(),
      Category.findAll({
        offset: (page - 1) * items,
        limit: items,
      }),
    ]);

    res.json({ count, data });
  } catch (err) {
    next(err);
  }
};

const searchCategories = async (req, res, next) => {
  const { name } = req.params;
  try {
    if (!name)
      throw new HttpError(
        400,
        'validation Error, please enter a category name to search'
      );

    const data = await Category.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories, searchCategories };
