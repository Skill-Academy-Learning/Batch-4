const express = require("express");

require("dotenv").config();

const admin = require("./routes/admin");
const seller = require("./routes/seller");
const buyer = require("./routes/buyer");
const auth = require("./routes/auth");

const app = express();

app.use(express.json());

app.use("/buyer", buyer);
app.use("/seller", seller);
app.use("/admin", admin);
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

app.listen(8080, () => {
  console.log("Server running and listening at port 8080");
});
