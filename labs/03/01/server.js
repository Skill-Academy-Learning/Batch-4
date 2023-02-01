const express = require("express");

require("dotenv").config();

const moviesRouter = require("./routes/movies");

const app = express();

app.use(express.json());

app.use("/movies", moviesRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "404 - Route not found" });
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: "500 - Server error" });

  next();
});

app.listen(8080, () => {
  console.log("Started express server at port 8080!");
});
