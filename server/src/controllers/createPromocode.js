const { DiscountCode } = require('../models');

exports.createPromoCode = async (req, res, next) => {
  const { discoutType, amount, promocode, expireDate } = req.body;
  try {
    const newPromocode = await DiscountCode.create({
      discountType: discoutType,
      discountAmount: amount,
      expiresAt: expireDate,
      promocode,
    });

    res.json({ success: true, data: newPromocode });
  } catch (err) {
    next(err);
  }
};
