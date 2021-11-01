const { HttpError } = require('../utils');
const { DiscountCode } = require('../models');

exports.createPromoCode = async (req, res, next) => {
  const { discoutType, amount, promocode, expireDate } = req.body;
  try {
    const data = await DiscountCode.findOne({
      where: { promocode },
    });

    if (data) {
      throw new HttpError(
        400,
        'The promocode you entered has been used before, please try again with a new code. '
      );
    }

    await DiscountCode.create({
      discountType: discoutType,
      discountAmount: amount,
      expiresAt: expireDate,
      promocode,
    });

    res.json({
      success: true,
      msg: `Your promocode has been created successfully : ${promocode} `,
    });
  } catch (err) {
    next(err);
  }
};
