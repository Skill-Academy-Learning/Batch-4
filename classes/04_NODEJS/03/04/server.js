const express = require("express");
const cookieParser = require("cookie-parser");

const usersRouter = require("./routes/users.js");
const itemsRouter = require("./routes/items.js");
const cookiesRouter = require("./routes/cookies.js");

const app = express();

app.use("/static", express.static("public"));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

// app.use("/", loggerMiddleware);

app.use("/users", usersRouter);
app.use("/items", itemsRouter);
app.use("/cookies", cookiesRouter);

app.get("/", (req, res) => {
  res.send(`<div>
  <a href="./static/contact-us.html">Contact Us</a>
  </div>`);
});

// error handler
app.use((error, req, res, next) => {
  res.json({
    error: {
      message: error?.message,
    },
  });

  console.log("Error occured: ", error);
  next();
});

app.listen(8080, () => {
  console.log("Server started and running at port 8080");
});
