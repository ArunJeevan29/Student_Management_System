const loggerMiddleware = (req, res, next) => {
  console.log("Request Received");
  next();
};

module.exports = loggerMiddleware