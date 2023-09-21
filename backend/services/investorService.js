import { UserModel } from "../models/User.js";
import { InvestorModel } from "../models/Investor.js";
import { sendMail } from "../utils/mailHelper.js";
import { cloudinary } from "../utils/uploadImage";

const adminMail = "learn.capitalhub@gmail.com";

//create investor
export const createInvestor = async (investorData) => {
  try {
    let existingCompany = await InvestorModel.findOne({
      founderId: investorData.founderId,
    });
    if (existingCompany) {
      existingCompany.set({
        ...investorData,
      });
      await existingCompany.save();
      return {
        status: 200,
        message: "Investor Updated",
        data: existingCompany,
      };
    }
    const newInvestor = new InvestorModel({
      ...investorData,
    });
    await newInvestor.save();
    const { founderId } = newInvestor;
    const user = await UserModel.findByIdAndUpdate(founderId, {
      investor: newInvestor._id,
      gender: investorData.gender,
      designation: investorData.designation,
      education: investorData.education,
      experience: investorData.experience,
      location: investorData.location,
    });
    const emailMessage = `
        A new user has requested for an account:
        
        Investor Details:
        User ID: ${user._id}
        Name: ${user.firstName} ${user.lastName}
        Email: ${user.email}
        Mobile: ${user.phoneNumber}
        Company Name: ${newInvestor.companyName}
        Industry: ${newInvestor.industry}
        Maximum Invest: ${newInvestor.maximumInvest}
        Minimum Invest: ${newInvestor.minimumInvest}
        Portfolio: ${newInvestor.portfolio}
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
          message: "Investor Added",
          data: newInvestor,
        };
      } else {
        return {
          status: 500,
          message: "Error while sending mail",
        };
      }
  } catch (error) {
    console.error("Error creating investor:", error);
    return {
      status: 500,
      message: "An error occurred while creating the investor.",
    };
  }
};

//add sector intrested
export const addSectorOfInterest = async (investorId, sectorData) => {
  try {
    const investor = await InvestorModel.findById(investorId);
    if (!investor) {
      return {
        status: 404,
        message: "Investor not found",
      };
    }
    if(sectorData.logo) {
      const { url } = await cloudinary.uploader.upload(sectorData.logo, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
        format: "webp",
        unique_filename: true,
      });
      sectorData.logo = url;
    }
    investor.sectorInterested.push(sectorData);
    await investor.save();
    return {
      status: 200,
      message: "Sector of interest added",
      data: investor,
    };
  } catch (error) {
    console.error("Error adding sector of interest:", error);
    return {
      status: 500,
      message: "An error occurred while adding the sector of interest.",
    };
  }
};

//add startup invested
export const addStartupInvested = async (investorId, startupData) => {
  try {
    const investor = await InvestorModel.findById(investorId);

    if (!investor) {
      return {
        status: 404,
        message: "Investor not found",
      };
    }
    if(startupData.logo) {
      const { url } = await cloudinary.uploader.upload(startupData.logo, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
        format: "webp",
        unique_filename: true,
      });
      startupData.logo = url;
    }
    investor.startupsInvested.push(startupData);
    await investor.save();
    return {
      status: 200,
      message: "Startup invested added",
      data: investor,
    };
  } catch (error) {
    console.error("Error adding startup invested:", error);
    return {
      status: 500,
      message: "An error occurred while adding the startup invested.",
    };
  }
};

//get investor by id
export const getInvestorById = async (investorId) => {
  try {
    const investor = await InvestorModel.findById(investorId)
    // .populate({
    //   path: 'founderId',
    //   model: 'Users', 
    // });
    if (!investor) {
      return {
        status: 404,
        message: "Investor Data not found",
      };
    }
    return {
      status: 200,
      message: "Investor Data found",
      data: investor,
    };
  } catch (error) {
    console.error("Error getting investor by ID:", error);
    return {
      status: 500,
      message: "An error occurred while fetching the investor details.",
    };
  }
};

export const uploadLogo = async (logo) => {
  try {
    const { url } = await cloudinary.uploader.upload(logo, {
      folder: `${process.env.CLOUDIANRY_FOLDER}/startUps/logos`,
      format: "webp",
      unique_filename: true,
    });
    return {
      status: 200,
      message: "Upload successfull",
      url: url,
    };
  } catch (error) {
    console.error("Error uploading:", error);
    return {
      status: 500,
      message: "An error occurred while uploading.",
    };
  }
};
