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
