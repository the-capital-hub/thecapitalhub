import React, { useState } from "react";
import "./ContactForm.scss";
import { environment } from "../../../../environments/environment";
import axios from "axios";
import AfterSuccessPopUp from "../../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import SpinnerBS from "../../../../components/Shared/Spinner/SpinnerBS";

const baseUrl = environment.baseUrl;
const APP_TYPES = ["Website", "Mobile Application", "Website and Mobile App"];
export default function ContactForm({ className, page }) {
  const initialData = {
    name: "",
    email: "",
    mobileNumber: "",
    typeOfApplication: APP_TYPES[0],
    comments: "",
  };
  const [formData, setFormData] = useState({ ...initialData });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Handle form submission
  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const requestBody = {
      name: formData.name,
      email: formData.email.trim(),
      mobile: formData.mobileNumber,
      inquiryType: formData.typeOfApplication,
      description: formData.comments,
      isEcom: true,
      page: page,
    };

    axios
      .post(`${baseUrl}/contactUs`, requestBody)
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          console.log("form submitted");
          setFormSubmitted(true);
          setFormData({ ...initialData });
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error sending mail:", error);
        setLoading(false);
      });
  }

  return (
    <div
      className={`contact_form_wrapper px-2 pt-3 pb-5 d-flex flex-column ${className}`}
      id="contact-us"
    >
      {formSubmitted && (
        <AfterSuccessPopUp
          contactFrom
          onClose={() => setFormSubmitted(!formSubmitted)}
        />
      )}
      <h2 className="form_heading text-capitalize mb-3">Let's talk!</h2>
      <form onSubmit={handleSubmit} className="contact_form">
        {/* Name */}
        <div className="form_div">
          <label htmlFor="name" className="form_label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form_input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="form_div">
          <label htmlFor="email" className="form_label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form_input"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Mobile Number */}
        <div className="form_div">
          <label htmlFor="mobileNumber" className="form_label">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            id="mobileNumber"
            className="form_input"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>

        {/* Type of Application */}
        <div className="form_div">
          <label htmlFor="typeOfApplication" className="form_label">
            Type of Application
          </label>
          <select
            name="typeOfApplication"
            id="typeOfApplication"
            className="form_input"
            value={formData.typeOfApplication}
            onChange={handleInputChange}
          >
            {APP_TYPES.map((option, index) => {
              return (
                <option value={option} key={`${index}${option}`}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        {/* Comments */}
        <div className="form_div full_span">
          <label htmlFor="comments" className="form_label">
            Comments
          </label>
          <textarea
            type="text"
            name="comments"
            id="comments"
            rows={5}
            className="form_input"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="btn fs-5 border-0 send_button full_span"
        >
          {loading ? (
            <SpinnerBS
              colorClass={"text-light"}
              spinnerSizeClass="spinner-border-sm"
            />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}
