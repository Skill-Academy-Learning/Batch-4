const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("login", {});
});

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    session: false,
  }),
  async (req, res) => {
    const token = await jwt.sign(req.user, process.env.JWT_SECRET);

    res.render("login-success", { token: token });
  }
);

module.exports = authRouter;
