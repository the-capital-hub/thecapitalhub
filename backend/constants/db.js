const { MongoClient } = require("mongodb");

const username = "raazuuprasain94";
const password = "TheCapitalHub@123"; // Password with '@' character
const clusterName = "cluster0";
const dbName = "yourDatabaseName";

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(
  password
)}@${clusterName}.3qsyv8d.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

module.exports = {
  connectToMongoDB,
  getClient: () => client,
};
