const express = require("express");
const loggerMiddleware = require("../util/logger");

const app = express.Router();

app.get("/", loggerMiddleware, (req, res) => {
  res.send("<h1>This is the users page</h1>");
});

module.exports = app;
