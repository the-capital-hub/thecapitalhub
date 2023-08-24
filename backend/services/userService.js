import { UserModel } from "../models/User.js";
import { comparePassword } from "../utils/passwordManager.js";
import { StartUpModel } from "../models/startUp.js";
import { cloudinary } from "../utils/uploadImage";

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
    if (existingUser) {
      throw new Error("Existing user. Please log in");
    }
    const newUser = new UserModel(user);
    await newUser.save();
    newUser.password = undefined;
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const loginUserService = async ({ phoneNumber, password }) => {
  const user = await UserModel.findOne({ phoneNumber, userStatus: "active" });
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
        message: "User not found.",
      };
    }
    return {
      status: 200,
      message: "User details retrieved successfully.",
      data: user,
    };
  } catch (error) {
    console.error("Error getting user:", error);
    return {
      status: 500,
      message: "An error occurred while getting the user.",
    };
  }
};

// Update User
export const updateUserData = async ({ userId, newData }) => {
  try {
    if (newData?.profilePicture) {
      const { url } = await cloudinary.uploader.upload(newData.profilePicture, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/users/profilePictures`,
        format: "webp",
        unique_filename: true,
      });
      newData.profilePicture = url;
    }
    const data = await UserModel.findByIdAndUpdate(
      userId,
      { ...newData },
      { new: true }
    );
    return {
      status: 200,
      message: "User updated succesfully",
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while updating the bio.",
    };
  }
};

// Start up data

export const getStartUpData = async (userId) => {
  try {
    const startUp = await StartUpModel.findOne({ founderId: userId });
    if (!startUp) {
      return {
        status: 404,
        message: "StartUp not found.",
      };
    }
    return {
      status: 200,
      message: "StartUp details retrieved successfully.",
      data: startUp,
    };
  } catch (error) {
    console.error("Error getting StartUp:", error);
    return {
      status: 500,
      message: "An error occurred while getting the StartUp.",
    };
  }
};

export const updateUserById = async (userId, newData) => {
  try {
    const data = await UserModel.findByIdAndUpdate(
      userId,
      { ...newData }
    );
    return {
      status: 200,
      message: "User updated succesfully",
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while updating the bio.",
    };
  }
};

export const changePassword = async (userId, newPassword) => {
  try {
    const user = await UserModel.findById(userId);
    user.password = newPassword;
    await user.save();
    return {
      status: 200,
      message: "Password Changed Successfully"
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while updating the password.",
    };
  }
};