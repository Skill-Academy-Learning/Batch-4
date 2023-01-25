const express = require("express");

const app = express();

app.get("/", (req, res) => {
  throw new Error("Boom!!!");

  res.send("Error Route");
});

app.post("/", (req, res) => {
  res.send({ method: "post" });
});

app.put("/", (req, res) => {
  res.send({ method: "put" });
});

app.delete("/", (req, res) => {
  res.send({ method: "delete" });
});

app.patch("/", (req, res) => {
  res.send({ method: "patch" });
});

module.exports = app;
