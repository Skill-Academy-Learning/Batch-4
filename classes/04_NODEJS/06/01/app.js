const { MongoClient, ServerApiVersion } = require("mongodb");

const dotenv = require("dotenv");

dotenv.config();

// creates connection
const mongoClient = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

mongoClient.connect(async (err) => {
  //sample_mflix.movies
  const collection = mongoClient.db("sample_mflix").collection("movies");

  const findResult = await collection.find({}).limit(2).toArray();

  console.log("Found documents =>", findResult);

  mongoClient.close();
});
