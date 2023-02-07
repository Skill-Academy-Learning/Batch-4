const express = require("express");
const passport = require("passport");

require("dotenv").config();

const admin = require("./routes/admin");
const seller = require("./routes/seller");
const buyer = require("./routes/buyer");
const auth = require("./routes/auth");

const checkAuthorization = require("./util/checkAuthorization");

// const authenticationMiddleware = require("./util/authenticationMiddleware,");
// const authorizationMiddleware = require("./util/authorizationMiddleware");

const app = express();

app.use(express.json());

app.use(passport.initialize());

require("./config/passport");

app.use(
  "/buyer",
  passport.authenticate("jwt", { session: false }),
  checkAuthorization("buyer"),
  buyer
);
app.use(
  "/seller",
  passport.authenticate("jwt", { session: false }),
  checkAuthorization("seller"),
  seller
);
app.use(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  checkAuthorization("admin"),
  admin
);

app.use("/auth", auth);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

app.listen(8080, () => {
  console.log("Server running and listening at port 8080");
});
