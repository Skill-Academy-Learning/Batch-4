const express = require("express");

require("dotenv").config();

const admin = require("./routes/admin");
const seller = require("./routes/seller");
const buyer = require("./routes/buyer");
const auth = require("./routes/auth");

const authenticationMiddleware = require("./util/authenticationMiddleware,");
const authorizationMiddleware = require("./util/authorizationMiddleware");

const app = express();

app.use(express.json());

app.use(
  "/buyer",
  authenticationMiddleware,
  authorizationMiddleware("buyer"),
  buyer
);
app.use(
  "/seller",
  authenticationMiddleware,
  authorizationMiddleware("seller"),
  seller
);
app.use(
  "/admin",
  authenticationMiddleware,
  authorizationMiddleware("admin"),
  admin
);

app.use("/auth", auth);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

app.listen(8080, () => {
  console.log("Server running and listening at port 8080");
});
