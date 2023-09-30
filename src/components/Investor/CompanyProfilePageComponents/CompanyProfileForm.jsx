import React, { useState, useEffect } from "react";
import "./CompanyProfileForm.scss";
import { postStartUpData, postInvestorData } from "../../../Service/user";

export default function CompanyProfileForm({ companyData, investor = false }) {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    if (investor) {
      setFormData({
        founderId: companyData.founderId || "",
        company: companyData.companyName || "",
        startedAtDate: companyData.startedAtDate || "",
        industryType: companyData.industry || "",
        noOfEmployees: companyData.noOfEmployees || "",
        vision: companyData.vision || "",
        mission: companyData.mission || "",
        socialLinks: companyData.socialLinks || "",
      });
    } else {
      setFormData(companyData || {});
    }
  }, [companyData, investor]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "siteUrl") {
      setFormData((prevData) => ({
        ...prevData,
        socialLinks: {
          ...prevData.socialLinks,
          website: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBlur = async () => {
    try {
      if (investor) {
        console.log(formData);
        const response = await postInvestorData(formData);
        console.log(response);  
      } else {
        const response = await postStartUpData(formData);
        console.log(response);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="" className="" onBlur={handleBlur}>
        <fieldset>
          <legend>Company Name</legend>
          <input
            type="text"
            name="company"
            id="company"
            className="profile_form_input"
            value={formData.company || ""}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>Established Date</legend>
          <input
            type="date"
            name="startedAtDate"
            id="startedAtDate"
            className="profile_form_input"
            value={formData.startedAtDate || ""}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>Type of Industry</legend>
          <input
            type="text"
            name="industryType"
            id="industryType"
            className="profile_form_input"
            value={formData.industryType || ""}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>No. of Employees</legend>
          <input
            type="number"
            name="noOfEmployees"
            id="noOfEmployees"
            max={2000}
            min={0}
            className="profile_form_input"
            value={formData.noOfEmployees || ""}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>Website URL</legend>
          <input
            type="url"
            name="siteUrl"
            id="siteUrl"
            className="profile_form_input"
            value={formData.socialLinks?.website || ""}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>Vision</legend>
          <input
            type="text"
            name="vision"
            id="vision"
            className="profile_form_input"
            value={formData.vision || ""}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>Mission</legend>
          <input
            type="text"
            name="mission"
            id="mission"
            className="profile_form_input"
            value={formData.mission || ""}
            onChange={handleInputChange}
          />
        </fieldset>
      </form>
    </>
  );
}
