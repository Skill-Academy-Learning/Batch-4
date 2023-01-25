function loggerMiddleware(req, res, next) {
  const currentDate = new Date();

  console.log(
    `${req.method} - ${
      currentDate.toLocaleDateString() + currentDate.toLocaleTimeString()
    } - ${req.url}`
  );

  next();
}

module.exports = loggerMiddleware;
