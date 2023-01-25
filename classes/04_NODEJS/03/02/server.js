const express = require("express");

const userRouter = require("./routes/users");
const itemsRouter = require("./routes/items");
const storesRouter = require("./routes/stores");

const loggerMiddleware = require("./util/loggerMiddleware");

const app = new express();

// Built-In middleware
app.use(express.static("public"));

app.use("/", loggerMiddleware);
app.use("/users", userRouter);
app.use("/items", itemsRouter);
app.use("/stores", storesRouter);

app.get("/", (req, res) => {
  // relative URL is also called route
  res.send("<h1>Hello World</h1>");
});

app.get("/about-us", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.get("/contact-us", (req, res) => {
  res.send("<h1>Contact Us</h1>");
});

// Catch all route
app.all("*", (req, res) => {
  res.send("<h2 style='color:red'>Page not found!</h2>");
});

app.use((error, req, res, next) => {
  res.json({
    success: false,
    message:
      "Something unexpected happened. Please try again. If you still face the same problem then contact our support team at bhgh@jjs.com",
    failureReason: error?.message,
  });

  next();
});

app.listen(8080, () => {
  console.log("Express Server started at port 8080");
});
