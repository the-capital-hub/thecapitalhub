const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://raazuuprasain94:TheCapitalHub@123@cluster0.3qsyv8d.mongodb.net/?retryWrites=true&w=majority";


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
