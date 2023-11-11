import { sendMail } from "../utils/mailHelper.js";
const adminMail = "learn.capitalhub@gmail.com";

export const contactUs = async (args) => {
  try {
    const { name, email, mobile, inquiryType, description, isEcom, page } = args;
    let emailMessage = "";
    if (isEcom) {
      emailMessage = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            /* Define your CSS styles here */
            body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
            }
            .container {
              border: 1px solid #e0e0e0;
              padding: 20px;
              border-radius: 5px;
              background-color: #fff;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              max-width: 600px;
              margin: 0 auto;
            }
            h2 {
              color: #333;
            }
            ul {
              list-style-type: none;
              padding: 0;
            }
            li {
              margin-bottom: 10px;
            }
            strong {
              font-weight: bold;
            }
            p {
              margin-top: 20px;
              color: #555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Contact Us Form</h2>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Mobile Number:</strong> ${mobile}</li>
              <li><strong>Type of Application:</strong> ${inquiryType}</li>
              <li><strong>Comments:</strong> ${description}</li>
            </ul>
            <p><strong>Page From:</strong> ${page}</p>
          </div>
        </body>
        </html>
      `;

    } else {
      emailMessage = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* Define your CSS styles here */
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            border: 1px solid #e0e0e0;
            padding: 10px;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          h2 {
            color: #333;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Contact Us Inquiry</h2>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Mobile Number:</strong> ${mobile}</li>
            <li><strong>Inquiry Type:</strong> ${inquiryType}</li>
            <li><strong>Description:</strong></li>
          </ul>
          <p>${description}</p>
        </div>
      </body>
      </html>
      `;
    }


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