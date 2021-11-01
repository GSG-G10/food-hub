const { Category } = require('./category');
const { Customer } = require('./customer');
const { DiscountCode } = require('./discountcode');
const { Meal } = require('./meal');
const { Restaurant } = require('./restaurant');
const { User } = require('./user');
const { UserDiscounts } = require('./userDiscount');

module.exports = {
  User,
  Customer,
  Restaurant,
  Category,
  Meal,
  DiscountCode,
  UserDiscounts,
};
