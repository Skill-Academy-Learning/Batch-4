function authorizationMiddleware(role) {
  return function (req, res, next) {
    console.log(req.url, role, res.locals.authInfo);

    if (role !== res.locals?.authInfo?.role) {
      res.status(403).json("Forbidden");

      res.end();
    }
    next();
  };
}

module.exports = authorizationMiddleware;
