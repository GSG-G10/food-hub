exports.errorHandler = (err, req, res, next) => {
  if (err.isHttpErrord) res.status(400).json({ err });
  else {
    res.status(500).json({ err });
  }
};
