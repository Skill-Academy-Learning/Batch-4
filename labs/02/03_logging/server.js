const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
// app.use(morgan("combined"));

// app.use(
//   morgan("':method :url :status :res[content-length] - :response-time ms'")
// );

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(8080, () => {
  console.log("Express server started and listening on port 8080");
});
