const express = require("express");
const passport = require("passport");

require("dotenv").config();

const authRouter = require("./routes/auth");
const moviesRouter = require("./routes/movies");

const app = express();
app.use(express.static("static"));

app.set("view engine", "ejs");

app.use(passport.initialize());

require("./config/passport");

app.use("/auth", authRouter);
app.use(
  "/movies",
  passport.authenticate("jwt", { session: false }),
  moviesRouter
);

app.get("/", (req, res) => {
  res.send("<a href='/movies'>Show Movie List</a>");
});

app.listen(8080, () => {
  console.log("App started and running at port 8080.");
});
