// eslint-disable-next-line no-unused-vars
exports.errorHandler = (err, req, res, next) => {
  // debugging:
  // eslint-disable-next-line no-console
  // if (config.NODE_ENV === 'testing') console.log(err);
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV === 'development') console.log(err);

  const { statusCode = 500, message } = err;

  res.status(statusCode).json({ message });
};
