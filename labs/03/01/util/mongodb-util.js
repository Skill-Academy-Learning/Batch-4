const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

let mongdbClient = null;

function createMongoDBConnection() {
  mongdbClient = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  console.log("MongoDB connection created...");
}

createMongoDBConnection();

function getMongoDBConnection() {
  return mongdbClient;
}

module.exports = {
  getMongoDBConnection,
  ObjectId,
};
