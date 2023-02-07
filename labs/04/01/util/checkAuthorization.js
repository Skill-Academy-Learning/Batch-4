function checkAuthorization(role) {
  return function (req, res, next) {
    if (role !== req.user?.role) {
      res.status(403).json({ message: "Forbidden" });
      res.end();
    }

    next();
  };
}

module.exports = checkAuthorization;
