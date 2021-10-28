class HttpError extends Error {
  constructor(statusCode = 400, message) {
    super(message);
    this.statusCode = statusCode;
    this.isHttpErrord = true;
  }
}

module.exports = { HttpError };
