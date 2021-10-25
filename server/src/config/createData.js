const { writeFileSync } = require('fs');
const { join } = require('path');
const faker = require('faker');

const createRandomData = () => {
  const users = [];
  const customers = [];
  const restaurant = [];
  const discountCode = [];
  const categories = [];

  const category = {
    breakfast:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    chicken:
      'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    meat: 'https://images.unsplash.com/photo-1611171711791-b34fa42e9fc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJlZWZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    pizza:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    burger:
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    dessert:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    pasta:
      'https://images.unsplash.com/photo-1617474019977-0e105d1b430e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    seafood:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    side: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    soup: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    drink:
      'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  };

  for (let i = 1; i <= 10; i += 1) {
    const id = i;
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.email();
    const accountType = ['customer', 'restaurant'];

    const customerName = faker.name.findName();
    const customerCity = faker.address.cityName();
    const customerStreetName = faker.address.streetName();
    const customerStreetAddress = faker.address.streetAddress();
    const customerFullAddress = `${customerCity},${customerStreetName},${customerStreetAddress}`;
    const customerPhone = faker.phone.phoneNumber();

    const restaurantName = faker.company.companyName();
    const description = faker.lorem.paragraph();
    const restaurantCity = faker.address.cityName();
    const restaurantStreetName = faker.address.streetName();
    const restaurantStreetAddress = faker.address.streetAddress();
    const restaurantFullAddress = `${restaurantCity}, ${restaurantStreetName}, ${restaurantStreetAddress}`;
    const logoUrl = faker.image.business();
    const lat = faker.address.latitude();
    const lon = faker.address.longitude();
    const contactEmail = faker.internet.email();
    const restaurantPhone = faker.phone.phoneNumber();

    const discountType = ['percentage', 'flat'];

    users.push({
      id,
      username,
      email,
      password,
      accountType: accountType[Math.round(Math.random())],
    });

    customers.push({
      userId: id,
      customerName,
      customerFullAddress,
      customerPhone,
    });

    restaurant.push({
      userId: id,
      restaurantName,
      description,
      restaurantFullAddress,
      lat,
      lon,
      logoUrl,
      contactEmail,
      restaurantPhone,
    });

    categories.push({
      id,
      name: Object.keys(category)[i - 1],
    });

    categories[i - 1].imageUrl = category[categories[i - 1].name];

    discountCode.push({
      mealId: id,
      discountType: discountType[Math.round(Math.random())],
    });

    discountCode[i - 1].discountAmount =
      discountCode[i - 1].discountType === 'percentage'
        ? `${Math.floor(Math.random() * 100)}`
        : `${faker.commerce.price()} `;
  }

  return { users, customers, restaurant, discountCode, categories };
};

const data = createRandomData();

writeFileSync(
  join(__dirname, 'data.json'),
  `${JSON.stringify(data, null, '\t')}\n`
);
