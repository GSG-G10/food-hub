# FoodHub 🍔

Foodhub is a food delivery website that have a plenty of restaurants registered in it so people can go over every restaurant and see all the meals they offer then order any meal from any restaurant they want

## [Live Demo](http://food-hub-gsg.herokuapp.com/) 📺

## Team :woman_technologist:

- [Imad Shatali](https://github.com/Amoodaa) **Team Lead**
- [Nour Adawi](https://github.com/NourAdawi)
- [Mohammed Mansour](https://github.com/M7Mansour)
- [Ahmed Omar](https://github.com/Ahmad-Omar)

## User Journey :airplane:

**As a Customer**

The user can register/login to the website through many options, username & password, Google, Facebook. And they could explore the meals in the website either by the restaurant page or a specific category page. they can add to cart the meals they want and then order it. also if they have a promo code they can use it , but a promo code can only be used once by the user.

## User Stories :open_book:

**As a Customer**

- I want to create an account.
- I want to log in to my account.
- I want to see all available restaurants .
- I want to see all categories in the restaurants.
- I want to see all meals in a category.
- I want to search for a meal/restaurant
- I want to add meals to my cart.
- I want to choose what meal to order and select quantity.
- I want to be able to delete from my cart.
- I want to be able to use a promo code
- I want to select my payment method.

## Tech Stack

### Frontend

- React
- React router
- Material Ui
- Firebase authentication

### Backend

- express
- postgresql
- sequelize
- Firebase authentication
- faker

## Prototype

![](https://i.imgur.com/5hUlSS0.png)

## Database Schema

![](https://github.com/M7Mansour/Calculator/blob/master/opengraph.jpeg)

## How To Run The App locally

1. clone repo
2. Run `npm i`
3. create `.env` in server folder and add the following:

```
DEV_DB_URL = postgres://username:password@localhost:5432/database
NODE_ENV = development
```

5. create `.env` in client folder and add the following:

```
REACT_APP_API_URL = http://localhost:8080
HTTPS=true
ESLINT_NO_DEV_ERRORS=true
```

6. create fake data using the command: `npm run build:fakedata `
7. build the database using the command: `npm run build:db`
8. to start the frontend & the server run:

```
npm run dev:server
npm run dev:client
```

## Stretch Goal

create restaurant admin page where he can add, edit, delete meals.
