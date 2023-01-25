const express = require("express");

const userRouter = require("./routes/users");

const app = express();

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("API of different HTTP verbs");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8080, () => {
  console.log("Express server started and listening on port 8080");
});
