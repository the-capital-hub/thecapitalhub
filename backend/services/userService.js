import { UserModel } from "../models/User.js";
import { comparePassword } from "../utils/passwordManager.js";
import { StartUpModel } from "../models/startUp.js";
import { cloudinary } from "../utils/uploadImage";
import jwt from "jsonwebtoken";
import { secretKey } from "../constants/config.js";
import { sendMail } from "../utils/mailHelper.js";

const adminMail = "learn.capitalhub@gmail.com";

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
  const user = await UserModel.findOne({
    phoneNumber,
    userStatus: "active",
  }).populate({
    path: "startUp",
    select: "company logo",
  });
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
    const data = await UserModel.findByIdAndUpdate(userId, { ...newData });
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
      message: "Password Changed Successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while updating the password.",
    };
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return {
        status: 404,
        message: "User Not Found",
      };
    }
    const payload = {
      userId: user._id.toString(),
    };
    const resetToken = jwt.sign(payload, secretKey, {
      expiresIn: "1h",
    });
    const resetLink = `${process.env.BASE_URL}/reset-password?token=${resetToken}`;
    console.log(resetToken);
    const resetPasswordMessage = `
      <p>You've requested to reset your password. If you didn't make this request, please ignore this email.</p>
  
      <p>To reset your password, click the button below:</p>
      <p style="text-align: center;"> 
      <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
    </p>
      <p>If the above button doesn't work, copy and paste the following URL into your browser:</p>
      <p>${resetLink}</p>
    
      <p>This link will expire in 1 hour for security reasons.</p>
    
      <p>If you have any questions or need further assistance, please contact our support team.</p>
    
      <p>Regards,<br>The Capital Hub</p>
    `;
    const subject = "Password Reset Request";
    const response = await sendMail(
      "The Capital Hub",
      user.email,
      adminMail,
      subject,
      resetPasswordMessage
    );
    if (response.status === 200) {
      return {
        status: 200,
        message: "Password reset email sent successfully",
      };
    } else {
      return {
        status: 500,
        message: "Error sending password reset email",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Error requesting password reset",
    };
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    if (!decodedToken || !decodedToken.userId) {
      return {
        status: 400,
        message: "Invalid or expired reset token",
      };
    }
    const user = await UserModel.findById(decodedToken.userId);
    if (!user) {
      return {
        status: 400,
        message: "User not found",
      };
    }
    user.password = newPassword;
    await user.save();
    return {
      status: 200,
      message: "Password reset successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Error resetting password",
    };
  }
};
