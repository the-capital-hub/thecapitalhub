import Company from "../models/company.js";

export const createCompany = async (args) => {
  try {
    let existingCompany = await Company.findOne({ founderId: args.founderId });
    if (existingCompany) {
      existingCompany.set({
        ...args
      });
      await existingCompany.save();
      return {
        status: 200,
        message: "Startup Updated"
      };
    } else {
      const newCompany = new Company({
        ...args
      });
      await newCompany.save();
      return {
        status: 200,
        message: "Startup Added"
      };
    }
  } catch (error) {
    console.error("Error creating company:", error);
    return {
      status: 500,
      message: "An error occurred while creating the company."
    };
  }
};

export const getOnePager = async (oneLink) => {
  try {
    const company = await Company.findOne({ oneLink: oneLink });
    if (!company) {
      return {
        status: 404,
        message: "Company not found."
      };
    }
    return {
      status: 200,
      message: "Company details retrieved successfully.",
      data: company
    };
  } catch (err) {
    console.error("Error getting company details:", err);
    return {
      status: 500,
      message: "An error occurred while getting company details."
    };
  }
};

