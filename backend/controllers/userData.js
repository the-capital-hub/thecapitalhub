const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const getUsersService = require("../services/userService");
const { registerUserService } = require("../services/userService");
const { secretKey } = require("../constants/config");

// const generateSecretKey = () => {
//   const lengthInBytes = 32; // 32 bytes = 256 bits
//   return crypto.randomBytes(lengthInBytes).toString("hex");
// };

// const secretKey = generateSecretKey();
// console.log("Secret Key:", secretKey);

const getUsersController = async (req, res, next) => {
  try {
    const getUser = await getUsersService.getUsersService();
    return res.status(200).json(getUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
};

const registerUserController = async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    // Perform input validation here if needed

    // Call the service to save the user
    const newUser = await registerUserService({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    // If the user is saved successfully, send a custom success response
    return res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
    if (error.message === "User with this email already exists") {
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }
    return res.status(500).json( error );
  }
};

const loginUserController = async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;
    console.log("req.body",req.body)

    // Perform input validation here if needed

    // Call the service to perform the login logic
    const user = await getUsersService.loginUserService({
      phoneNumber,
      password,
    });

    // If the login is successful, you can perform necessary actions
    const token = jwt.sign({ userId: user._id, phoneNumber: user.phoneNumber }, secretKey, {
      expiresIn: '1h', // Token expiration time (e.g., 1 hour)
    });
    req.user = user;
    console.log("token-->",token)
    console.log("secretKey-->",secretKey)

    // For example, you might set user session or JWT token
    // Here, we'll just return a success response
    return res.status(200).json({ message: "Login successful", user,token });
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
};

module.exports = {
  getUsersController,
  registerUserController,
  loginUserController,
};
