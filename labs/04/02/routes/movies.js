const express = require("express");

const { movies } = require("../config/database");

const moviesRouter = express.Router();

moviesRouter.get("/", (req, res) => {
  res.json({ movies });
});

module.exports = moviesRouter;
