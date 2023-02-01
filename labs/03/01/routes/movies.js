const express = require("express");

const { getMongoDBConnection, ObjectId } = require("../util/mongodb-util");

const app = express.Router();

// Read single record
app.get("/:id", async (req, res) => {
  const id = req.params?.id;

  const mongdbClient = getMongoDBConnection();

  const empCollection = mongdbClient.db("skillacademy").collection("employees");

  const employees = [];

  const results = await empCollection
    .find({ _id: ObjectId(id) })
    .forEach((element) => {
      employees.push(element);
    });

  res.json(employees);
});

// Read
app.get("/", async (req, res) => {
  const mongdbClient = getMongoDBConnection();

  const empCollection = mongdbClient.db("skillacademy").collection("employees");

  const employees = [];

  const results = await empCollection.find({}).forEach((element) => {
    employees.push(element);
  });

  res.json(employees);
});

// Create
app.post("/", async (req, res) => {
  const mongdbClient = getMongoDBConnection();

  const empCollection = mongdbClient.db("skillacademy").collection("employees");

  const results = await empCollection.insertOne({ ...req.body });

  res.json({ success: true, insertedId: results?.insertedId });
});

// Update
app.put("/:id", async (req, res) => {
  const id = req.params?.id;

  const mongdbClient = getMongoDBConnection();

  const empCollection = mongdbClient.db("skillacademy").collection("employees");

  const results = await empCollection.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        ...req.body,
      },
    }
  );

  res.json({ success: true });
});

// Delete
app.delete("/:id", async (req, res) => {
  const id = req.params?.id;

  const mongdbClient = getMongoDBConnection();

  const empCollection = mongdbClient.db("skillacademy").collection("employees");

  const results = await empCollection.deleteOne({ _id: ObjectId(id) });

  res.json({ success: true });
});

module.exports = app;
