const { allCategoriesQuery, singleCategoryQuery } = require('../queries');

const getCategories = async (req, res) => {
  const { page, items } = req.query;
  try {
    if (page <= 0) throw new Error();
    const data = await allCategoriesQuery(page, items);
    res.json(data);
  } catch (err) {
    res.status(403).json({ message: 'pagination error' });
  }
};

const getSingleCategory = async (req, res) => {
  const { page, items } = req.query;
  const { categoryName } = req.params;
  try {
    if (page <= 0) throw new Error();
    const data = await singleCategoryQuery(page, items, categoryName);
    res.json(data);
  } catch (err) {
    res.status(403).json(err);
  }
};

module.exports = { getCategories, getSingleCategory };
