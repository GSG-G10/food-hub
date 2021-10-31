const { HttpError } = require('../utils');
const { DiscountCode, UserDiscounts } = require('../models');

exports.redeemCode = async (req, res, next) => {
  const { promocode } = req.body;
  try {
    const code = await DiscountCode.findOne({
      where: { promocode },
    });

    if (!code)
      throw new HttpError(
        400,
        'The code you entered is incorrect, please try again.'
      );

    const { uid } = req.user;
    const promocodeId = code.id;

    const data = await UserDiscounts.findOrCreate({
      where: { promocode: promocodeId, userid: uid },
    });

    if (!data[1])
      throw new HttpError(400, `Sorry, you have already used this promo code.`);
  } catch (err) {
    next(err);
  }
};

// The code you entered has expired

// const test = async (promocode, uid) => {
//   try {
//     const code = await DiscountCode.findOne({
//       where: { promocode },
//     });

//     if (!code)
//       throw new HttpError(
//         400,
//         'The code you entered is incorrect, please try again.'
//       );

//     const promocodeId = code.id;

// const data = await UserDiscounts.findOrCreate({
//   where: { promocode: promocodeId, userid: uid },
// });
//     console.log(data[1]);
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(test('BSASA', 6));
