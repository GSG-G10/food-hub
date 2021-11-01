/* eslint-disable no-console */
const {
  User,
  Customer,
  Restaurant,
  Category,
  Meal,
  DiscountCode,
  // eslint-disable-next-line no-unused-vars
  UserDiscounts,
} = require('../models');
const { sequelize } = require('./connection');
const data = require('./data.json');

const importDataToDatabase = async () => {
  await sequelize.sync({ force: true });

  await Promise.all([
    ...data.users.map((item) => User.create(item)),
    ...data.categories.map((item) => Category.create(item)),
  ]);
  await Promise.all([
    ...data.customers.map((item) => Customer.create(item)),
    ...data.restaurants.map((item) => Restaurant.create(item)),
  ]);
  await Promise.all(data.meals.map((item) => Meal.create(item)));
  await Promise.all(data.discountCode.map((item) => DiscountCode.create(item)));

  console.log('Database filled with data!');
  return process.exit(0);
};

importDataToDatabase();

module.exports = { importDataToDatabase };
