const { MongoClient, ServerApiVersion } = require("mongodb");

let mongoClient = null;

function createDBConnection() {
  mongoClient = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
}

// Create DB connection on starting server
createDBConnection();

function getDBConnection() {
  return mongoClient;
}

module.exports = {
  getDBConnection,
};
