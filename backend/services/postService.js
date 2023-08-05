const { MongoClient } = require("mongodb");

// Replace "your-mongodb-uri" with your actual MongoDB connection URI
const uri = "mongodb://localhost:27017/your-database-name";

let client;

const connectToMongoDB = async () => {
  try {
    if (!client) {
      client = new MongoClient(uri);
      await client.connect();
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

const getClient = () => {
  if (!client) {
    throw new Error("MongoDB client is not connected.");
  }
  return client;
};

const postService = async ({ text, image, video, document }) => {
  try {
    // Connect to MongoDB before using the client
    await connectToMongoDB();

    // Now that the client is connected, you can obtain it
    const db = client.db("your-database-name"); // Replace "your-database-name" with your actual database name

    // You can choose to create a new collection for posts or use an existing one
    const postsCollection = db.collection("posts"); // Replace "posts" with your actual collection name

    // Create a new post document
    const post = {
      text,
      image: image ? image.data : null, // Store the file content as a Buffer
      video: video ? video.data : null,
      document: document ? document.data : null,
      created_at: new Date(), // Add a timestamp for when the post was created
    };

    // Insert the post document into the collection
    const result = await postsCollection.insertOne(post);

    // Return the newly created post document
    return result.ops[0];
  } catch (error) {
    console.error("Error in postService:", error);
    throw new Error("Error creating post");
  }
};

module.exports = {
  getClient,
  connectToMongoDB,
  postService,
};
