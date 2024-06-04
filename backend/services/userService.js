import { UserModel } from "../models/User.js";
//import { comparePassword } from "../utils/passwordManager.js";
import { StartUpModel } from "../models/startUp.js";
import { InvestorModel } from "../models/Investor.js";
import { cloudinary } from "../utils/uploadImage.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constants/config.js";
import { sendMail } from "../utils/mailHelper.js";
import bcrypt from "bcrypt";

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
    //newUser.password = undefined;
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
  //await comparePassword(password, user.password);
  return user;
};

//get User by id
export const getUserById = async (userId) => {
  try {
    let user = await UserModel.findOne({ oneLinkId: userId }).populate('startUp');
    if (!user) {
      user = await UserModel.findById(userId).populate(['startUp', 'investor']);
    }
    if (!user) {
      return {
        status: 404,
        message: "User not found.",
      };
    }
    user.password = undefined;
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
      const { secure_url } = await cloudinary.uploader.upload(newData.profilePicture, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
        format: "webp",
        unique_filename: true,
      });
      newData.profilePicture = secure_url;
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
    const data = await UserModel.findByIdAndUpdate(userId, { ...newData }, { new: true });
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

export const changePassword = async (userId, { newPassword, oldPassword }) => {
  try {
    const user = await UserModel.findById(userId);
    const checkPassword = bcrypt.compare(oldPassword, user.password);
    if (!checkPassword) {
      return {
        status: 401,
        message: "Invalid Password",
      };
    }
    user.password = newPassword;
    await user.save();
    return {
      status: 200,
      message: "Password Changed Successfully",
    };
  } catch (error) {
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
  console.log("token, newPassword", token, newPassword);
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

//search user/ company
export const searchUsers = async (searchQuery) => {
  const regex = new RegExp(`^${searchQuery}`, "i");
  try {
    const users = await UserModel.find({
      $and: [
        {
          $or: [
            { firstName: { $regex: regex } },
            { lastName: { $regex: regex } },
          ],
        },
        { userStatus: "active" },
      ],
    });

    const companyIds = users.map((user) => user.startUp);
    const company = await StartUpModel.find({
      $or: [
        { company: { $regex: regex } },
        { oneLink: { $regex: regex } },
        { _id: { $in: companyIds } }
      ],
    });

    const investorCompanyIds = users.map((user) => user.investor);
    const investor = await InvestorModel.aggregate([
      {
        $match: {
          $or: [
            { companyName: { $regex: regex } },
            { oneLink: { $regex: regex } },
            { _id: { $in: investorCompanyIds } }
          ],
        },
      },
      {
        $addFields: {
          company: "$companyName",
          isInvestor: true,
        },
      },
    ]);

    return {
      status: 200,
      data: {
        users: users,
        company: company.concat(investor),
      },
    };
  } catch (error) {
    console.error("Error searching for users:", error);
    return {
      status: 500,
      message: "Error searching for users",
    };
  }
};

// add education
export const addEducation = async (userId, educationData) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    if (educationData?.logo) {
      const { secure_url } = await cloudinary.uploader.upload(educationData.logo, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
        format: "webp",
        unique_filename: true,
      });
      educationData.logo = secure_url;
    }
    user.recentEducation.push(educationData);
    await user.save();
    return {
      status: 200,
      message: "Education added",
      data: user,
    };
  } catch (error) {
    console.error("Error adding recent education:", error);
    return {
      status: 500,
      message: "An error occurred while adding education.",
    };
  }
};

// add experince
export const addExperience = async (userId, experienceData) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    if (experienceData?.logo) {
      const { secure_url } = await cloudinary.uploader.upload(experienceData.logo, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
        format: "webp",
        unique_filename: true,
      });
      experienceData.logo = secure_url;
    }
    user.recentExperience.push(experienceData);
    await user.save();
    return {
      status: 200,
      message: "Experience added",
      data: user,
    };
  } catch (error) {
    console.error("Error adding recent experience:", error);
    return {
      status: 500,
      message: "An error occurred while adding experience.",
    };
  }
};

export const addStartupToUser = async (userId, startUpId) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: { startUp: startUpId } },
      { new: true }
    );
    if (!user) {
      return {
        status: 404,
        message: "User not found.",
      };
    }

    let isFirst = false;
    const achievementId = "6564687349186bca517cd0cd";
    if (!user.achievements.includes(achievementId)) {
      user.achievements.push(achievementId);
      await user.save();
      isFirst = true;
    }

    return {
      status: 200,
      message: "Startup added to user successfully.",
      data: user,
      isFirst,
    };
  } catch (error) {
    console.error("Error adding startups to user:", error);
    return {
      status: 500,
      message: "An error occurred while adding startups to user.",
    };
  }
};

export const addUserAsInvestor = async (userId, investorId) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: { investor: investorId } },
      { new: true }
    );
    if (!user) {
      return {
        status: 404,
        message: "User not found.",
      };
    }
    return {
      status: 200,
      message: "Investor added to user successfully.",
      data: user,
    };
  } catch (error) {
    console.error("Error adding user as investor:", error);
    return {
      status: 500,
      message: "An error occurred while adding user as investor.",
    };
  }
};

export const getExplore = async (filters) => {
  try {
    const {
      type,
      sector,
      gender,
      city,
      size,
      yearsOfExperience,
      previousExits,
      diversityMetrics,
      sectorPreference,
      investmentSize,
      investmentStage,
      fundingRaised,
      productStage,
      stage,
      age,
      education,
      searchQuery,
    } = filters;

    // for startups
    if (type === "startup") {
      const query = {};
      if (sector) {
        query.sector = sector
      }
      if (city) {
        query.location = city;
      }
      if (size) {
        query.noOfEmployees = { $gte: size };
      }
      if (fundingRaised) {
        query.fundingRaised = fundingRaised;
      }
      if (productStage) {
        query.productStage = productStage;
      }
      if (stage) {
        query.stage = stage;
      }
      if (age) {
        query.age = age;
      }
      if (searchQuery) {
        query.company = { $regex: new RegExp(`^${searchQuery}`, 'i') };
      }
      const startups = await StartUpModel.find(query).populate("founderId");
      return {
        status: 200,
        message: "Startup data retrieved",
        data: startups,
      };

      // for investors
    } else if (type === "investor") {
      const query = {};
      if (sector) {
        query.sector = sector
      }
      if (city) {
        query.location = city;
      }
      const investors = await InvestorModel.find(query);
      const users = await UserModel.find();
      const filteredUsers = users.filter((user) => {
        return investors.some((investor) => user?.investor?.toString() === investor._id.toString());
      });
      const founderIds = filteredUsers.map((investor) => investor._id);
      const founderQuery = {};
      if (gender) {
        founderQuery.gender = gender;
      }
      if (sectorPreference) {
        founderQuery.sectorPreferences = { $in: [sectorPreference] };
      }
      if (investmentSize) {
        founderQuery.investmentSize = investmentSize;
      }
      if (investmentStage) {
        founderQuery.investmentStage = investmentStage;
      }
      if (searchQuery) {
        founderQuery.firstName = { $regex: new RegExp(`^${searchQuery}`, 'i') };
      }
      const founders = await UserModel.find({
        _id: { $in: founderIds },
        ...founderQuery,
        userStatus: "active",
      }).select("-password")
        .populate("investor");
      return {
        status: 200,
        message: "Investors data retrieved",
        data: founders,
      };

      // for founder
    } else if (type === "founder") {
      const query = {};
      if (sector) {
        query.sector = sector
      }
      if (city) {
        query.location = city;
      }
      const startups = await StartUpModel.find(query);
      const founderIds = startups.map((startup) => startup.founderId);
      const founderQuery = {};
      if (gender) {
        founderQuery.gender = gender;
      }
      if (previousExits) {
        founderQuery.previousExits = previousExits;
      }
      if (yearsOfExperience) {
        founderQuery.yearsOfExperience = yearsOfExperience;
      }
      if (education) {
        founderQuery.education = education;
      }
      if (diversityMetrics) {
        founderQuery.diversityMetrics = { $in: [diversityMetrics] };
      }
      if (searchQuery) {
        founderQuery.firstName = { $regex: new RegExp(`^${searchQuery}`, 'i') };
      }
      const founders = await UserModel.find({
        _id: { $in: founderIds },
        ...founderQuery,
        userStatus: "active",
      }).select("-password")
        .populate("startUp");
      return {
        status: 200,
        message: "Founder data retrieved",
        data: founders,
      };
    } else {
      return {
        status: 400,
        message: "Invalid 'type' parameter",
      };
    }
  } catch (error) {
    console.error("Error getting explore results:", error);
    return {
      status: 500,
      message: "An error occurred while getting explore results.",
    };
  }
};

export const getExploreFilters = async (type) => {
  try {
    if (type === "startup") {
      // const startupSectors = await StartUpModel.distinct("sector");
      const startupCities = await StartUpModel.distinct("location");
      return {
        status: 200,
        message: "Startup filters retrieved",
        data: {
          // sectors: startupSectors,
          cities: startupCities,
        },
      };
    } else if (type === "investor") {
      // const investorSectors = await InvestorModel.distinct("sector");
      const investorCities = await InvestorModel.distinct("location");
      return {
        status: 200,
        message: "Investor filters retrieved",
        data: {
          // sectors: investorSectors,
          cities: investorCities,
        },
      };
    } else if (type === "founder") {
      // const founderSectors = await StartUpModel.distinct("sector");
      const founderCities = await StartUpModel.distinct("location");
      return {
        status: 200,
        message: "Founder filters retrieved",
        data: {
          // sectors: founderSectors,
          cities: founderCities,
        },
      };
    } else {
      return {
        status: 400,
        message: "Invalid 'type' parameter",
      };
    }
  } catch (error) {
    console.error("Error getting explore filters:", error);
    return {
      status: 500,
      message: "An error occurred while getting explore filters.",
    };
  }
};

export const validateSecretKey = async ({ oneLinkId, secretOneLinkKey }) => {
  try {
    const user = await UserModel.findOne({ oneLinkId });

    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    if (!user.secretKey) {
      const token = jwt.sign({}, secretKey, { expiresIn: "1h" });
      return {
        status: 200,
        message: "Secret key is valid",
        token,
      };
    }

    if (secretOneLinkKey === user.secretKey) {
      const token = jwt.sign({}, secretKey, { expiresIn: "1h" });
      return {
        status: 200,
        message: "Secret key is valid",
        token,
      };
    } else {
      return {
        status: 401,
        message: "Invalid secret key",
      };
    }
  } catch (error) {
    console.error("Error validating secret key:", error);
    return {
      status: 500,
      message: "An error occurred while validating the secret key.",
    };
  }
};

export const createSecretKey = async (userId, secretOneLinkKey) => {
  try {
    // const hashedSecretKey = await hashPassword(secretOneLinkKey);
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { secretKey: secretOneLinkKey },
      { new: true }
    );
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    return {
      status: 200,
      message: "Secret key created and stored successfully",
      user: user,
    };
  } catch (error) {
    console.error("Error creating and storing secret key:", error);
    return {
      status: 500,
      message: "An error occurred while creating and storing the secret key.",
    };
  }
};

export const googleLogin = async (credential) => {
  try {
    const { email } = jwt.decode(credential);
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return {
        status: 404,
        message: "User not found.",
      }
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      secretKey
    );
    user.password = undefined;
    return {
      status: 200,
      message: "Google Login successfull",
      data: user,
      token: token,
    };
  } catch (error) {
    console.error("Error login:", error);
    return {
      status: 500,
      message: "An error occurred while login using google.",
    };
  }
};

// Update Education
export const updateEducation = async (userId, educationId, updatedData) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const education = user.recentEducation.id(educationId);
    if (!education) {
      return {
        status: 404,
        message: "Education entry not found",
      };
    }
    if (updatedData?.logo) {
      const { secure_url } = await cloudinary.uploader.upload(updatedData.logo, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
        format: "webp",
        unique_filename: true,
      });
      updatedData.logo = secure_url;
    }

    education.set(updatedData);
    await user.save();

    return {
      status: 200,
      message: "Education updated",
      data: user.recentEducation,
    };
  } catch (error) {
    console.error("Error updating education:", error);
    return {
      status: 500,
      message: "An error occurred while updating education.",
    };
  }
};

// Delete Education
export const deleteEducation = async (userId, educationId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    user.recentEducation = user.recentEducation.filter(
      (education) => education._id.toString() !== educationId
    );
    await user.save();
    return {
      status: 200,
      message: "Education deleted",
      data: user.recentEducation,
    };
  } catch (error) {
    console.error("Error deleting education:", error);
    return {
      status: 500,
      message: "An error occurred while deleting education.",
    };
  }
};

// Update Experience
export const updateExperience = async (userId, experienceId, updatedData) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const experience = user.recentExperience.id(experienceId);
    if (!experience) {
      return {
        status: 404,
        message: "Experience entry not found",
      };
    }
    if (updatedData?.logo) {
      const { secure_url } = await cloudinary.uploader.upload(updatedData.logo, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
        format: "webp",
        unique_filename: true,
      });
      updatedData.logo = secure_url;
    }

    experience.set(updatedData);
    await user.save();

    return {
      status: 200,
      message: "Experience updated",
      data: user.recentExperience,
    };
  } catch (error) {
    console.error("Error updating experience:", error);
    return {
      status: 500,
      message: "An error occurred while updating experience.",
    };
  }
};

export const deleteExperience = async (userId, experienceId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    user.recentExperience = user.recentExperience.filter(
      (experience) => experience._id.toString() !== experienceId
    );
    await user.save();
    return {
      status: 200,
      message: "Experience deleted",
      data: user.recentExperience,
    };
  } catch (error) {
    console.error("Error deleting experience:", error);
    return {
      status: 500,
      message: "An error occurred while deleting experience.",
    };
  }
};
