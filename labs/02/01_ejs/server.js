const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("views", "./somethingelse");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact-us", (req, res) => {
  res.render("contact-us", {
    name: "Rohit Sharma",
    profession: "Cricketer",
    offices: ["Bangalore", "Mumbai", "Pune", "Ahmedabad"],
  });
});

app.listen(8080, () => {
  console.log("Express server started and listening on port 8080");
});
