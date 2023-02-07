const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { users } = require("../config/database");

const app = express.Router();

app.post("/", async (req, res) => {
  const { username, password } = req.body;

  const userFound = users.find((user) => {
    return user.username === username;
  });

  if (!userFound) {
    res.status(401).json({ message: "Unauthorized" });
    res.end();
    return;
  } else {
    const hash = await bcrypt.hash(password, 10);

    const passwordMatches = await bcrypt.compare(
      password,
      userFound.passwordHash
    );

    if (!passwordMatches) {
      res.status(401).json({ message: "Unauthorized" });
      res.end();
      return;
    } else {
      res.json({
        isLoggedIn: true,
        jwt: jwt.sign(
          {
            username: userFound.username,
            role: userFound.role,
          },
          process.env.MY_JWT_SECRET,
          { expiresIn: "24h" }
        ),
      });
    }
  }
});

module.exports = app;
