const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "Buyer Page" });
});

module.exports = app;
