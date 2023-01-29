const express = require("express");
const dotenv = require("dotenv").config();

const { getDBConnection } = require("./util/mongodb-util");

const app = express();

app.get("/", async (req, res) => {
  const mongoClient = getDBConnection();

  const collection = mongoClient.db("sample_mflix").collection("movies");

  const findResult = await collection.find({}).limit(2).toArray();

  console.log("Found documents =>", findResult);

  res.json({ data: findResult });
});

app.listen(8080, () => {
  console.log("Server started and listening at port 8080!");
});
