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

  console.log("userFound: ", userFound);

  if (!userFound) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  } else {
    const hash = await bcrypt.hash(password, 10);

    console.log(password, hash, userFound.passwordHash);

    const passwordMatches = await bcrypt.compare(
      password,
      userFound.passwordHash
    );

    console.log("passwordMatches: ", passwordMatches);

    if (!passwordMatches) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    } else {
      res.json({
        jwt: jwt.sign(
          {
            username: "username",
            role: userFound.role,
          },
          process.env.MY_JWT_SECRET,
          { expiresIn: "24h" }
        ),
      });

      res.json({ message: "Seller Page" });
    }
  }
});

module.exports = app;
