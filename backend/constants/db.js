import { MongoClient } from "mongodb";

const username = "raazuuprasain94";
const password = "CapitalHub@123"; // Password with '@' character
const clusterName = "cluster0";
const dbName = "thecapitalhub";

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(
  password
)}@${clusterName}.3qsyv8d.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const client = new MongoClient(uri);

export const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};
