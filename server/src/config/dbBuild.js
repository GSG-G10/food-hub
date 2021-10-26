/* eslint-disable no-console */
const {
  User,
  Customer,
  Restaurant,
  Category,
  Meal,
  DiscountCode,
} = require('../models');
const data = require('./data.json');

const importDataToDatabase = async () => {
  data.users.forEach((item) => User.create(item));
  data.customers.forEach((item) => Customer.create(item));
  data.restaurants.forEach((item) => Restaurant.create(item));
  data.categories.forEach((item) => Category.create(item));
  data.meals.forEach((item) => Meal.create(item));
  data.discountCode.forEach((item) => DiscountCode.create(item));
  // console.log(`Data ${JSON.stringify(data, null, 2)}`);
  // return 'Database filled with data!';
};

importDataToDatabase();

module.exports = { importDataToDatabase };
