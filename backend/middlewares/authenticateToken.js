import jwt from "jsonwebtoken";
import { secretKey } from "../constants/config";
import { getClient } from "../constants/db";

const authenticateToken = (req, res, next) => {
  console.log("req", req);
  const token = req.header("Authorization");
  console.log("Received token:", token);
  console.log("Using secret:", secretKey);

  try {
    // Verify the token synchronously and get the user details
    const user = jwt.verify(token, secretKey);

    console.log("Token verified. User details:", user);

    // Now, fetch the user details from the database using the user ID (assuming you have a "users" collection)
    const client = getClient();
    const db = client.db("thecapitalhub"); // Replace "your-database-name" with your actual database name
    const usersCollection = db.collection("users"); // Replace "users" with your actual collection name

    const foundUser = usersCollection.findOne({ _id: user.userId });

    if (!foundUser) {
      return res.status(403).json({ success: false, message: "Invalid token" });
    }

    // Set the user object in the request
    req.user = foundUser;

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res
      .status(403)
      .json({
        success: false,
        message: "Invalid tokens",
        error: error.message,
      });
  }
};

export default authenticateToken;
