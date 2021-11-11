const { writeFileSync } = require('fs');
const { join } = require('path');
const faker = require('faker');
const { randomUUID } = require('crypto');
const sourceData = require('./sourcedata.json');
const restaurantsData = require('./restaurantsData.json');

const createRandomData = () => {
  const users = [];
  const customers = [];
  const restaurants = [];
  const discountCode = [];

  const sourceCategories = Object.entries(sourceData).map(
    ([categoryName, { image, meals }], id) => ({
      id: id + 1,
      name: categoryName,
      image,
      meals,
    })
  );

  for (let i = 1; i <= 20; i += 1) {
    const id = randomUUID();
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.email();
    const accountType = ['customer', 'restaurant'];

    users.push({
      id,
      username,
      email,
      password,
      accountType: accountType[Math.round(Math.random())],
    });
  }

  for (let i = 0; i < 10; i += 1) {
    const customerName = faker.name.findName();
    const customerCity = faker.address.cityName();
    const customerStreetName = faker.address.streetName();
    const customerStreetAddress = faker.address.streetAddress();
    const customerFullAddress = `${customerCity},${customerStreetName},${customerStreetAddress}`;
    const customerPhone = faker.phone.phoneNumber();

    customers.push({
      userId: users[i].id,
      customerName,
      customerFullAddress,
      customerPhone,
    });
  }

  for (let i = 10; i < 20; i += 1) {
    const { restaurantName, logoUrl } = restaurantsData.restaurants[i - 10];
    const description = faker.lorem.paragraph();
    const restaurantCity = faker.address.cityName();
    const restaurantStreetName = faker.address.streetName();
    const restaurantStreetAddress = faker.address.streetAddress();
    const restaurantFullAddress = `${restaurantCity}, ${restaurantStreetName}, ${restaurantStreetAddress}`;
    const lat = faker.address.latitude();
    const lon = faker.address.longitude();
    const contactEmail = faker.internet.email();
    const restaurantPhone = faker.phone.phoneNumber();

    restaurants.push({
      userId: users[i].id,
      restaurantName,
      description,
      restaurantFullAddress,
      lat,
      lon,
      logoUrl,
      contactEmail,
      restaurantPhone,
    });
  }
  const meals = sourceCategories
    .map(({ id: categoryId, meals: categoryMeals }) =>
      categoryMeals.map(({ name, imageUrl }) => ({
        categoryId,
        restaurantId: faker.random.arrayElement(
          restaurants.map((res) => res.userId)
        ),
        name,
        images: JSON.stringify([imageUrl, imageUrl]),
        price: +faker.commerce.price(2, 60),
      }))
    )
    .flat()
    .map((meal, id) => ({ id: id + 1, ...meal }));

  for (let i = 0; i <= 40; i += 1) {
    const discountType = faker.random.arrayElement(['percentage', 'flat']);

    discountCode.push({
      discountType,
      discountAmount:
        discountType === 'percentage'
          ? +faker.commerce.price(5, 30)
          : +faker.commerce.price(1, 10),
      expiresAt: faker.date.future(1).toISOString(),
      promocode: faker.random.alphaNumeric(6).toUpperCase(),
    });
  }

  const categories = sourceCategories.map(({ meals: _, ...rest }) => rest);

  return {
    users,
    customers,
    restaurants,
    discountCode,
    categories,
    meals,
  };
};

const data = createRandomData();

writeFileSync(
  join(__dirname, 'data.json'),
  `${JSON.stringify(data, null, '\t')}\n`
);
