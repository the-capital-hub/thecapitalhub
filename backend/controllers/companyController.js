import {
  createCompany,
  getOnePager,
} from "../services/companyService.js";

//create startup
export const createCompanyController = async (req, res) => {
  try {
    const response = await createCompany(req.body);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while creating the company."
    });
  }
};

export const getOnePagerController = async (req, res) => {
  const { oneLink } = req.body;
    try {
        const response = await getOnePager(oneLink);
        res.status(response.status).send(response);
    } catch (err) {
        console.error("Error getting Company Details:", err);
        res.status(500).send({
            status: 500,
            message: "An error occurred while getting company details."
        });
    }
};