import mongoose from "mongoose";
import { UserModel } from "../models/User.js";
import { comparePassword } from "../utils/passwordManager.js";

export const getUsersService = async (info) => {
  try {
    const products = await UserModel.find({}).toArray();
    return products;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};

export const registerUserService = async (user) => {
  try {
    const existingUser = await UserModel.findOne({
      $or: [{ email: user.email }, { phoneNumber: user.phoneNumber }],
    });
    console.log(existingUser);
    if (existingUser) {
      throw new Error("Existing user. Please log in");
    }
    const newUser = new UserModel(user);
    newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const loginUserService = async ({ phoneNumber, password }) => {
  const user = await UserModel.findOne({ phoneNumber });

  if (!user) throw new Error("Invalid credentials");

  await comparePassword(password, user.password);
  return user;
};

//get User by id
export const getUserById = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found."
      };
    }
    return {
      status: 200,
      message: "User details retrieved successfully.",
      data: user
    };
  } catch (error) {
    console.error("Error getting user:", error);
    return {
      status: 500,
      message: "An error occurred while getting the user."
    };
  }
};