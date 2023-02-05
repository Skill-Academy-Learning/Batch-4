const jwt = require("jsonwebtoken");

async function authenticationMiddleware(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    res.status(403).json("Forbidden");

    res.end();

    return;
  }

  const authToken = authorizationHeader.split(" ")[1];

  try {
    const { username, role } = await jwt.verify(
      authToken,
      process.env.MY_JWT_SECRET
    );

    res.locals.authInfo = { username, role };

    //TODO: Check DB again to see if the user with this username is still active and still has the role mentioned in the token
  } catch (error) {
    res.status(403).json("Forbidden");

    res.end();

    return;
  }

  next();
}

module.exports = authenticationMiddleware;
