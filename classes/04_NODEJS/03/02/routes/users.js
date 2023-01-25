const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.send("<h1>Users List</h1>");
});

app.get("/get-active", (req, res) => {
  res.send("<h1>Active Users</h1>");
});

app.get("/100/send-email", (req, res) => {
  res.send("<h1>Send User Email</h1>");
});

module.exports = app;
