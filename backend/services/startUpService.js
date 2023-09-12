import { UserModel } from "../models/User.js";
import { StartUpModel } from "../models/startUp.js";
import { sendMail } from "../utils/mailHelper.js";
import { cloudinary } from "../utils/uploadImage";

const adminMail = "learn.capitalhub@gmail.com";

export const createStartup = async (startUpData) => {
  try {
    if (startUpData?.logo) {
      const { url } = await cloudinary.uploader.upload(startUpData.logo, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/users/profilePictures`,
        format: "webp",
        unique_filename: true,
      });
      startUpData.logo = url;
    }
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
    const user = await UserModel.findByIdAndUpdate(founderId, {
      startUp: newStartUp._id,
      gender: startUpData.gender,
    });
    const emailMessage = `
        A new user has requested for an account:
        
        User Details:
        User ID: ${user._id}
        Name: ${user.firstName} ${user.lastName}
        Email: ${user.email}
        Mobile: ${user.phoneNumber}

        Startup Details:
        Company Name: ${newStartUp.company}
        Sector: ${newStartUp.sector}
        Funding Ask: ${newStartUp.fundingAsk}
        Previous Funding: ${newStartUp.preFundingAsk}
        Number of Funding Rounds: ${newStartUp.numberOfFundingRounds}
      `;
      const subject = "New Account Request";
      const response = await sendMail(
        user.firstName,
        adminMail,
        user.email,
        subject,
        emailMessage
      )
      if(response.status === 200) {
        return {
          status: 200,
          message: "Startup Added",
        };
      } else {
        return {
          status: 500,
          message: "Error while sending mail",
        };
      }
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
    console.error("Error updating StartUp details:", error);
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
    console.error("Error updating One Pager details:", error);
    return {
      status: 500,
      message: "An error occurred while updating One Pager details.",
    };
  }
};

export const investNowService = async (args) => {
  try {
    const { fromUserName, fromUserEmail, fromUserMobile, toUserId } = args;
    const toUser = await UserModel.findById(toUserId);
    if (!toUser) {
      return {
        status: 404,
        message: "Recipient user not found.",
      };
    }
    
    const emailMessage = `
      Hello ${toUser.firstName},
      
      You have received an investment proposal from ${fromUserName}.
      
      Contact Details:
      Email: ${fromUserEmail}
      Mobile: ${fromUserMobile}
      
      Regards,
      CapitalHub
    `;
    const response = await sendMail(
      "Capital HUB",
      toUser.email,
      fromUserEmail,
      "Investment Proposal",
      emailMessage
    );

    if (response.status === 200) {
      const startup = await StartUpModel.findOne({ founderId: toUserId });
      if (startup) {
        startup.investorProposals.push({
          name: fromUserName,
          email: fromUserEmail,
          phone: fromUserMobile,
        });
        await startup.save();
      }
      return {
        status: 200,
        message: "Investment proposal email sent successfully.",
      };
    } else {
      return {
        status: 500,
        message: "An error occurred while sending the investment proposal email.",
      };
    }
  } catch (error) {
    console.error("Error sending investment proposal email:", error);
    return {
      status: 500,
      message: "An error occurred while sending the investment proposal email.",
    };
  }
};

export const getStartupByFounderId = async (founderId) => {
  try {
    const company = await StartUpModel.findOne({ founderId });
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
}

// Get All Startups
export const getAllStartups = async () => {
  try {
    const startups = await StartUpModel.find();
    return {
      status: 200,
      message: "Startups retrieved successfully.",
      data: startups,
    };
  } catch (error) {
    console.error("Error getting all startups:", error);
    return {
      status: 500,
      message: "An error occurred while getting all startups.",
    };
  }
};