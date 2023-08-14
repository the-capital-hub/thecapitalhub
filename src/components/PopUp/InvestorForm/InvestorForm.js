import React, { useState } from "react";
import "./InvestorForm.scss";
import { Link } from "react-router-dom";

const InvestorForm = ({ onStartupClick }) => {
  const [formData, setFormData] = useState({
    company: "",
    designation: "",
    gender: "",
    education: "",
    experience: "",
    location: "",
    industry: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can call your onStartupClick or other logic here with formData
    console.log(formData);
  };

  return (
    <>
      <div className="startup_form_container">
        <div className="popup-container">
          <div className="popup">
            <div className="back_and_home">
              <Link to={"/signup"}>
                <img src="back" alt="back" />
              </Link>
              <a href="/signup">Home</a>
            </div>
            <div className="title_text">
              <h1>Investor</h1>
              <p>
                Enter the required information below . You can change it anytime
                you want
              </p>
            </div>
            <div className="inside_startUp_popup">
              <form onSubmit={handleSubmit}>
                <div className="input_half row">
                  <div className="col-12">
                    <label htmlFor="company">Company:</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="input_half row">
                  <div className="col-6">
                    <label htmlFor="designation">Designation:</label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="gender">Gender:</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                <div className="input_half row">
                  <div className="col-6">
                    <label htmlFor="education">Education:</label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="experience">Experience:</label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="input_half row">
                  <div className="col-12">
                    <label htmlFor="location">Location:</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />{" "}
                  </div>
                </div>

                <div className="input_half row">
                  <div className="col-12">
                    <label htmlFor="portfolio">Portfolio:</label>
                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="input_half row">
                  <div className="col-12">
                    <label htmlFor="industry">Industry:</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>

                <div className="input_half row">
                  <div className="col-12">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorForm;
