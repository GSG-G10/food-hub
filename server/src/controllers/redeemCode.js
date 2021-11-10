const { HttpError } = require('../utils');
const { DiscountCode, UserDiscounts } = require('../models');

// eslint-disable-next-line consistent-return
exports.redeemCode = async (req, res, next) => {
  const { promocode, totalPrice } = req.body;
  let newPrice;
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

    if (new Date() > code.expiresAt)
      throw new HttpError(400, `The code you entered has been expired.`);

    if (code.discountType === 'flat')
      newPrice = totalPrice - code.discountAmount;
    else {
      newPrice = totalPrice - (totalPrice * code.discountAmount) / 100;
    }

    return res.json({ success: true, data: newPrice });
  } catch (err) {
    next(err);
  }
};
