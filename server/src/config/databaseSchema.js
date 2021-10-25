const Sequelize = require('sequelize');

const { DB_URL, DEV_DB_URL, TEST_DB_URL, NODE_ENV } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'testing':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('No database found');
}

const sequelize = new Sequelize(dbUrl);

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  accountType: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

const Customer = sequelize.define('customers', {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  name: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
});

const Restaurant = sequelize.define('restaurants', {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  name: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
});

const Category = sequelize.define('categories', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
});

const Meal = sequelize.define('meals', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  category: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  restaurantId: {
    type: Sequelize.INTEGER,
  },
});

Meal.belongsTo(Restaurant, { foreignkey: 'restaurantId' });
Meal.belongsTo(Category, { foreignkey: 'category', as: 'categoryName' });

const DiscountCode = sequelize.define('discountcode', {
  mealId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'meals',
      key: 'id',
    },
  },
  type: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  User,
  Customer,
  Restaurant,
  Category,
  Meal,
  DiscountCode,
};
