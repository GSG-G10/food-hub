const request = require('supertest');
const app = require('../../src/app');

describe('test restaurant endpoints', () => {
  describe('get request to /restaurants', () => {
    it('response is a json type with status code of 200 ', async () => {
      const res = await request(app).get('/api/v1/restaurants').expect(200);
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });

    it('response has all restaurants information', async () => {
      const res = await request(app).get('/api/v1/restaurants');
      const {
        userId,
        restaurantName,
        restaurantPhone,
        description,
        lat,
        lon,
        logoUrl,
        contactEmail,
        restaurantFullAddress,
      } = res.body.data[0];

      expect(userId).toBeDefined();
      expect(restaurantName).toBeDefined();
      expect(restaurantPhone).toBeDefined();
      expect(description).toBeDefined();
      expect(lat).toBeDefined();
      expect(lon).toBeDefined();
      expect(logoUrl).toBeDefined();
      expect(contactEmail).toBeDefined();
      expect(restaurantFullAddress).toBeDefined();
    });
  });

  describe('get request to /restaurants/:id', () => {
    it('response has all information about a restaurant with an id ', async () => {
      const id = 1;
      const res = await request(app).get(`/api/v1/restaurants/${id}`);
      expect(res.body[0]).toHaveProperty('userId', id);
    });
    it('should not return value < 0 ', async () => {
      const id = 0;
      const res = await request(app).get(`/api/v1/restaurants/${id}`);
      expect(res.body[0]).toBeFalsy();
      expect(res.statusCode).toBe(400);
    });
  });
});
