const  request  = require('supertest');
const sequelize = require('../../src/config/connection')
const app = require('../../src/app');
const { DiscountCode, Restaurant } = require('../../src/models');


describe('test restaurant endpoints' , () => {

    it('response is a json type with status code of 200 ', async ()=> {
        const res = await request(app).get('/api/v1/restaurants')
        .expect(200)
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    it('response has all restaurant information', async () => {
        const res = await request(app).get('/api/v1/restaurants')
        console.log(res.body);
        console.log((res.body.data).length);
        expect(res.body.data[0].userId).toBeDefined()
        expect(res.body.data[0].restaurantName).toBeDefined()
        expect(res.body.data[0].restaurantPhone).toBeDefined()
        expect(res.body.data[0].description).toBeDefined()
        expect(res.body.data[0].lat).toBeDefined()
        expect(res.body.data[0].lon).toBeDefined()
        expect(res.body.data[0].logoUrl).toBeDefined()
        expect(res.body.data[0].contactEmail).toBeDefined()
        expect(res.body.data[0].restaurantFullAddress).toBeDefined()
    })
})