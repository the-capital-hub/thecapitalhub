import { sendMail } from "../utils/mailHelper";
const adminMail = "learn.capitalhub@gmail.com";

export const contactUs = async (args) => {
	try {
		const { name, email, mobile, inquiryType, description } = args;

    const emailMessage = `
      Name: ${name}
      Email: ${email}
      Mobile Number: ${mobile}
      Inquiry Type: ${inquiryType}
      Description:
      ${description}
    `;

    const response = await sendMail(
      "Contact Us Form",
      adminMail, 
      email,
      "Contact Us Inquiry",
      emailMessage
    );

    if (response.status === 200) {
      return {
        status: 200,
        message: "Your inquiry has been sent successfully.",
      };
    } else {
      return {
        status: 500,
        message: "An error occurred while sending your inquiry.",
      };
    }
	} catch (error) {
		console.error("Error sending mail:", error);
		return {
			status: 500,
			message: "An error occurred while sending mail.",
		};
	}
}	