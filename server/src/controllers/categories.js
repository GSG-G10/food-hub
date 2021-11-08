const { Op } = require('sequelize');
const { Category } = require('../models');
const { HttpError } = require('../utils');

const getCategories = async (req, res, next) => {
  const { page = 1, items = 10, search = '' } = req.query;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );

    const [count, data] = await Promise.all([
      Category.count({
        where: {
          name: {
            [Op.like]: `%${search}%`,
          },
        },
      }),
      Category.findAll({
        offset: (page - 1) * items,
        limit: items,
        where: {
          name: {
            [Op.like]: `%${search}%`,
          },
        },
        raw: true,
      }),
    ]);

    res.json({
      pagination: { count, page, itemsPerPage: items },
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories };
