import React from "react";
import "./ContactForm.scss";

const APP_TYPES = ["Website", "Mobile Application", "Website and Mobile App"];

export default function ContactForm({ className }) {
  // handle submit
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      className={`contact_form_wrapper px-2 pt-3 pb-5 d-flex flex-column ${className}`} id="contact-us"
    >
      <h2 className="form_heading text-capitalize mb-3">Let's talk!</h2>
      <form onSubmit={handleSubmit} className="contact_form">
        {/* Name */}
        <div className="form_div">
          <label htmlFor="name" className="form_label">
            Name
          </label>
          <input type="text" name="name" id="name" className="form_input" />
        </div>

        {/* Email */}
        <div className="form_div">
          <label htmlFor="email" className="form_label">
            Email
          </label>
          <input type="email" name="email" id="email" className="form_input" />
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
            defaultValue={APP_TYPES[0]}
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
          />
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="btn fs-5 border-0 send_button full_span"
        >
          Send
        </button>
      </form>
    </div>
  );
}
