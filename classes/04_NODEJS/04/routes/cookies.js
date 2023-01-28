const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.json({ example: "Cookies" });
});

app.get("/set", (req, res) => {
  res.cookie("fullName", "Rohit Sharma");

  res.send("cookie was set");
});

app.get("/get", (req, res) => {
  res.send({ type: "getter", cookies: req.cookies });
});

module.exports = app;
