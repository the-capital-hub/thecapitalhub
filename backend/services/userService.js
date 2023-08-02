const { getClient } = require("../constants/db");
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
  
  module.exports = {
    getUsersService,registerUserService
  };