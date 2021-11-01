const  request  = require('supertest');
const sequelize = require('../src/config/connection')
const app = require('../src/app');
const { DiscountCode, Restaurant } = require('../src/models');



describe('POST /promo', () => {
  afterAll(() => sequelize.close());


  describe('given all information', () => {
    
    const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE1MjU1NWEyMjM3MWYxMGY0ZTIyZjFhY2U3NjJmYzUwZmYzYmVlMGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTm91ciBBZGF3aSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHZ0hKTjMyS0daMU9UZUNSS2FMWnFNa2ZkVHUyU1ZKMXhTYUVCOWg2dz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9mb29kaHViLTgyNzkzIiwiYXVkIjoiZm9vZGh1Yi04Mjc5MyIsImF1dGhfdGltZSI6MTYzNTYxNDQwOSwidXNlcl9pZCI6IjYwYlQxMWw1a3pTTHc0OE82dXdBMEpSRDhybjIiLCJzdWIiOiI2MGJUMTFsNWt6U0x3NDhPNnV3QTBKUkQ4cm4yIiwiaWF0IjoxNjM1NzI1MjAxLCJleHAiOjE2MzU3Mjg4MDEsImVtYWlsIjoibm91cmFkd2kxMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwOTYwODAxNzQwNDE1NDE5NTcxNSJdLCJlbWFpbCI6WyJub3VyYWR3aTEyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.WowVh6a0CoeKe69lhn9jgukDhR9W5-kZkvnQluU3TcCwbEM6v_oqYYpwMSQgNVACrJea75ji5agI8c4HfDAaRuT6HtR80zbyCnRwLspqqimqseRcHd-syU-SZPEwm14Q5wVKxlatY7zLHK2WgqIMoEiNUkhewXA32veWgsrZzngRIys95RSyDt-ZwW9BJqbOWbJNfaReCMvU1miqZ1ZdiO9YA3G0Fj9x5G1Tex4kaqI5_rMTup4Z6mQOel2eaFsvKEl2EocsXXncLW17DFlleDInYz2KYH99QWSeQpY_eTDZ3yXLLpzAbzXAD8I1Dr6ACJviso8axMDAspq_37TclQ'

    it('should response with a 200 status code', async () => {
        const response = await request(app).post('/api/v1/promo')
        .set({ Authorization: token })
        .send({
            discoutType: 'flat',
            amount: 5,
            promocode: 'DWFSQ',
            expireDate: new Date()
        }) 
        expect(response.statusCode).toBe(200)
    })

    it('restaurant', async () => {

      // await Restaurant.create({
      //   userId: 2,
      //   restaurantName: 'NOUURRR',
      //   restaurantFullAddress: ' I JUST WANT THE TEST TO PASSSS',
      //   restaurantPhone: '(956) 3E3-8362',
        
      // });
      const response = await request(app).get('/api/v1/restaurant')      
      expect(response.statusCode).toBe(200)
  })

    it("should specify json in the content type header", async () => {
      const response = await request(app).post("/api/v1/promo")
      .set({ Authorization: token })
      .send({
        discoutType: 'flat',
            amount: 5,
            promocode: 'DWFSQ',
            expireDate: new Date()
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    it("should response with a json object telling it's been created successfully", async () => {
      
    //   await DiscountCode.create({
    //    discountType: 'flat',
    //    discountAmount: 5,
    //    expiresAt: new Date(),
    //    promocode: 'DWWWSQ',
    //  });
    const response = await request(app).post("/api/v1/promo")
    .set({ Authorization: token })
    .send({
      discoutType: 'flat',
      amount: 5,
      promocode: 'DQWWSQ',
      expireDate: new Date()
    })
    
    
      console.log('herrrree',response.body);
      expect(response.body).toMatchObject({
        success: true,
      })
    })


  });


});
