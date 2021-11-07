const { HttpError } = require('../utils');
const { Meal, Category } = require('../models');

const getMealsByCategory = async (req, res, next) => {
  const { page = 1, items = 10 } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );

    const [count, data] = await Promise.all([
      Meal.count({ where: { categoryId: id } }),
      Meal.findAll({
        offset: (page - 1) * items,
        limit: items,
        where: { categoryId: id },
        raw: true,
        nest: true,
        include: [
          {
            model: Category,
            attributes: ['name'],
          },
        ],
      }),
    ]);
    res.json({
      pagination: { count, page, itemsPerPage: items },
      data: data.map((item) => ({ ...item, images: JSON.parse(item.images) })),
    });
  } catch (err) {
    next(err);
  }
};

const getMealsByRestaurant = async (req, res, next) => {
  const { page = 1, items = 10 } = req.query;
  const { id } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    const [count, data] = await Promise.all([
      Meal.count({ where: { restaurantId: id } }),
      Meal.findAll({
        offset: (page - 1) * items,
        limit: items,
        where: { restaurantId: id },
        raw: true,
        nest: true,
        include: [
          {
            model: Category,
            attributes: ['name'],
          },
        ],
      }),
    ]);
    res.json({
      pagination: { count, page, itemsPerPage: items },
      data: data.map((item) => ({ ...item, images: JSON.parse(item.images) })),
    });
  } catch (err) {
    next(err);
  }
};

const getMealById = async (req, res, next) => {
  const { mealid } = req.params;
  try {
    const data = await Meal.findAll({
      where: { id: mealid },
      raw: true,
      nest: true,
      include: [
        {
          model: Category,
          attributes: ['name'],
        },
      ],
    });

    res.json({
      data: data.map((item) => ({ ...item, images: JSON.parse(item.images) })),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getMealsByCategory, getMealsByRestaurant, getMealById };
