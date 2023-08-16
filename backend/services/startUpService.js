import { UserModel } from "../models/User.js";
import { StartUpModel } from "../models/startUp.js";

export const createStartup = async (startUpData) => {
  try {
    let existingCompany = await StartUpModel.findOne({
      founderId: startUpData.founderId,
    });
    if (existingCompany) {
      existingCompany.set({
        ...startUpData,
      });
      await existingCompany.save();
      return {
        status: 200,
        message: "Startup Updated",
      };
    }
    const newStartUp = new StartUpModel({
      ...startUpData,
    });
    await newStartUp.save();
    const { founderId } = newStartUp;
    await UserModel.findByIdAndUpdate(founderId, {
      startUp: newStartUp._id,
      gender: newStartUp.gender,
    });
    return {
      status: 200,
      message: "Startup Added",
    };
  } catch (error) {
    console.error("Error creating company:", error);
    return {
      status: 500,
      message: "An error occurred while creating the company.",
    };
  }
};

export const getOnePager = async (oneLink) => {
  try {
    const company = await StartUpModel.findOne({ oneLink });
    if (!company) {
      return {
        status: 404,
        message: "StartUp not found.",
      };
    }
    return {
      status: 200,
      message: "StartUp details retrieved successfully.",
      data: company,
    };
  } catch (err) {
    console.error("Error getting StartUp details:", err);
    return {
      status: 500,
      message: "An error occurred while getting StartUp details.",
    };
  }
};

export const updateStartUpData = async (founderId, data) => {
  try {
    const startUp = await StartUpModel.findOne({ founderId });
    if (!startUp) {
      return {
        status: 404,
        message: "No startUp found",
      };
    }
    const updatedData = await StartUpModel.findOneAndUpdate(
      { founderId },
      data,
      { new: true }
    );
    return {
      status: 200,
      data: updatedData,
      message: `${startUp.company} updated succesfully`,
    };
  } catch (error) {
    console.error("Error updating StartUp details:", err);
    return {
      status: 500,
      message: "An error occurred while updating StartUp details.",
    };
  }
};

export const updateOnePager = async ({ _id, ...data }) => {
  try {
    const newOnePage = await StartUpModel.findByIdAndUpdate(_id, data, {
      new: true,
    });
    return {
      status: 200,
      message: "One Pager updated succesfully",
      data: newOnePage,
    };
  } catch (error) {
    console.error("Error updating One Pager details:", err);
    return {
      status: 500,
      message: "An error occurred while updating One Pager details.",
    };
  }
};
