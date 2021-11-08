// eslint-disable-next-line no-unused-vars
exports.errorHandler = (err, req, res, next) => {
  if (err.isHttpError) res.status(400).json({ err });
  else {
    res.status(500).json({ err });
  }
};
