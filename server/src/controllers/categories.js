const { allCategoriesQuery, singleCategoryQuery } = require('../queries');
const { HttpError } = require('../utils');

const getCategories = async (req, res, next) => {
  const { page, items } = req.query;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    const data = await allCategoriesQuery(page, items);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const getSingleCategory = async (req, res, next) => {
  const { page, items } = req.query;
  const { categoryId } = req.params;
  try {
    if (page <= 0)
      throw new HttpError(
        400,
        'Pagination Error, Please contact development team for help'
      );
    const data = await singleCategoryQuery(page, items, categoryId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories, getSingleCategory };
