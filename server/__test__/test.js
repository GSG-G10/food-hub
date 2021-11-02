// const  request  = require('supertest');
// const sequelize = require('../src/config/connection')

// const app = require('../src/app');
// const { DiscountCode, Restaurant } = require('../src/models');
// const { auth } = require('../src/utils/authTest');
// const admin = require('../src/config/firebase');

// // jest.mock('../src/utils/authTest');
// const myMock = jest.mockImplementation((req,res,next) => {
//   const { authorization } = req.headers;
//  if(authorization) next();
// })
// const req = {headers:{ Authorization: token } }
//     const res = {
//       json: jest.fn(),
//       status: jest.fn(),
//     };
//     const next = jest.fn();

// console.log(myMock);
// describe('POST /promo', () => {

//   afterAll(() => sequelize.close());


//   describe('test firebase authentication', () => {
    

//     // it('should response with a 200 status code', async () => {

//     //     const response = await request(app).post('/api/v1/promo')
//     //     .set({ Authorization: token })
//     //     .send({
//     //         discoutType: 'flat',
//     //         amount: 5,
//     //         promocode: 'DWFSQ',
//     //         expireDate: new Date()
//     //     }) 
        
//     //     expect(response.statusCode).toBe(200)
//     // })

//   //////////////////////////////////
//   it('should response with a 200 status code', async () => {
//     const req = {headers:{ Authorization: token } }
//     const res = {
//       json: jest.fn(),
//       status: jest.fn(),
//     };
//     const next = jest.fn();
  
//     const response = await myMock(req,res,next)
//    console.log('11111111111111',response);

//    expect(myMock).toHaveBeenCalled();
//     expect(response.statusCode).toBe(200)
// })



//   ////////////////////////////

//     it("should specify json in the content type header", async () => {
//       const response = await request(app).post("/api/v1/promo")
//       .set({ Authorization: token })
//       .send({
//         discoutType: 'flat',
//             amount: 5,
//             promocode: 'DWFSQ',
//             expireDate: new Date()
//       })
//       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//     })

//     it("should response with a json object telling it's been created successfully", async () => {
      
//     //   await DiscountCode.create({
//     //    discountType: 'flat',
//     //    discountAmount: 5,
//     //    expiresAt: new Date(),
//     //    promocode: 'DWWWSQ',
//     //  });
//     const response = await request(app).post("/api/v1/promo")
//     .set({ Authorization: token })
//     .send({
//       discoutType: 'flat',
//       amount: 5,
//       promocode: 'DQWWSQ',
//       expireDate: new Date()
//     })
    
    
//       console.log('herrrree',response.body);
//       expect(response.body).toMatchObject({
//         success: true,
//       })
//     })


//   });


// });

// describe('test restaurant endpoint', () => {

//   it('restaurant', async () => {

//     // await Restaurant.create({
//     //   userId: 2,
//     //   restaurantName: 'NOUURRR',
//     //   restaurantFullAddress: ' I JUST WANT THE TEST TO PASSSS',
//     //   restaurantPhone: '(956) 3E3-8362',
      
//     // });
//     const response = await request(app).get('/api/v1/restaurant')      
//     expect(response.statusCode).toBe(200)
// })
// })


