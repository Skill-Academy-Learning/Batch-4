const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "Seller Page" });
});

module.exports = app;
