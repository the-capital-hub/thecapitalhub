const { getClient, connectToMongoDB } = require("../constants/db");
const getUsersService = async (info) => {
    try {
        const client = getClient();
        const database = client.db("thecapitalhub");
        const collection = database.collection("users");
    
        const products = await collection.find({}).toArray();
        return products;
      } catch (error) {
        console.error("Failed to fetch data:", error);
        return [];
      }
  };
  connectToMongoDB()
 

  const registerUserService = async (user) => {
    console.log("user",user)
    try {
      const client = getClient();
      const database = client.db("thecapitalhub");
      const collection = database.collection("users");
  
      // Check if the user already exists based on the email
      const existingUser = await collection.findOne({ email: user.email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
  
      // Save the new user in the database

      const result = await collection.insertOne(user);
  
      // Return the saved user object
      return result
    } catch (error) {
      console.error('Failed to create the user:', error);
      throw error;
    }
  };

  const loginUserService = async ({ phoneNumber, password }) => {
    try {
      const client = getClient();
      const database = client.db("thecapitalhub");
      const collection = database.collection("users");
  
      // Find the user based on the provided phoneNumber
      const user = await collection.findOne({ phoneNumber });
      console.log("user-->",user)
  
      // Check if the user exists and if the provided password matches the stored password
      if (user && user.password === password) {
        return user;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Failed to perform login:', error);
      throw error;
    }
  };
  
  module.exports = {
    getUsersService,registerUserService,loginUserService
  };