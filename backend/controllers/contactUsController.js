import { contactUs } from "../services/contactUsService.js";

export const contactUsController = async (req, res) => {
	try {
		const response = await contactUs(req.body);
		res.status(response.status).send(response);
	} catch (error) {
		console.error(error);
		res.status(500).send({
			status: 500,
			message: "An error occurred while submitting contact Us",
		});
	}
};