const express = require("express");

const app = express.Router();

app.get("/:itemid/models/:modelnumber", (req, res) => {
  const itemId = req.params.itemid;
  const modelNumber = req.params.modelnumber;

  const location = req.query.location;
  const shippingAddress = req.query.shippingAddress;

  res.json({
    itemId: itemId,
    modelNumber,
    location,
    shippingAddress,
  });
});

module.exports = app;

// Route Params
// Query Strings -- http://localhost:8080/items/100/models/200?location=Mumbai&shippingAddress=home
