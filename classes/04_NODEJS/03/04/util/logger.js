function logger(req, res, next) {
  console.log(req.method, "-", new Date().toLocaleTimeString(), "-", req.url);
  next();
}

module.exports = logger;
