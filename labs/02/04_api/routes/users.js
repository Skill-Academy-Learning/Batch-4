const express = require("express");

const app = express.Router();

const { add, get, del } = require("../data");

app.get("/", (req, res) => {
  const data = get();

  res.status(200).json({ data });
});

app.post("/", (req, res) => {
  add();

  res.json({ message: "added" });
});

app.put("/", (req, res) => {
  //TODO:
  res.json({ method: "put" });
});

app.patch("/", (req, res) => {
  //TODO:
  res.json({ method: "patch" });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;

  del(id);

  res.json({ message: "deleted" });
});

module.exports = app;
