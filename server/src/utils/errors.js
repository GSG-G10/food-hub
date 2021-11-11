class HttpError extends Error {
  constructor(statusCode = 400, message) {
    super(message);
    this.statusCode = statusCode;
    this.isHttpError = true;
  }
}

module.exports = { HttpError };
