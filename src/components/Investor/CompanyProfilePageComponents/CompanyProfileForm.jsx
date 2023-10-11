import React, { useState, useEffect } from "react";
import "./CompanyProfileForm.scss";
import { postStartUpData, postInvestorData } from "../../../Service/user";
import { getBase64 } from "../../../utils/getBase64";
import AfterSuccessPopup from "../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";

export default function CompanyProfileForm({ companyData, investor = false }) {
  const [formData, setFormData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fromSubmit, setFromSubmit] = useState(false);
  const [popupData, setPopupData] = useState("");



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
        keyFocus: companyData.keyFocus || "",
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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedFile) {
        const logo = await getBase64(selectedFile);
        formData.logo = logo;
      }
      if (investor) {
        const response = await postInvestorData(formData);
        console.log(response);
      } else {
        const response = await postStartUpData(formData);
        console.log(response);
        setPopupData("Changes saved")
        setFromSubmit(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile__form">
      <form action="" className="" onSubmit={handleSubmit}>
        <fieldset className={investor ? "investor" : "startup"}>
          <legend>Company Profile Picture</legend>
          <input
            type="file"
            name="companyLogo"
            id="companyLogo"
            className=" visually-hidden"
            value={""}
            accept="image/*"
            onChange={handleFileInputChange}
          />
          <div className="profile_form_input d-flex align-items-center gap-4">
            <label htmlFor="companyLogo" style={{ cursor: "pointer" }}>
              Upload Picture
            </label>
            <p className="m-0 fs-6 fw-light">{selectedFile?.name}</p>
          </div>
        </fieldset>

        <fieldset className={investor ? "investor" : "startup"}>
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

        <fieldset className={investor ? "investor" : "startup"}>
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

        <fieldset className={investor ? "investor" : "startup"}>
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

        <fieldset className={investor ? "investor" : "startup"}>
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

        <fieldset className={investor ? "investor" : "startup"}>
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

        <fieldset className={investor ? "investor" : "startup"}>
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

        <fieldset className={investor ? "investor" : "startup"}>
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

        <fieldset className={investor ? "investor" : "startup"}>
          <legend>Key Focus</legend>
          <input
            type="text"
            name="keyFocus"
            id="keyFocus"
            className="profile_form_input"
            value={formData.keyFocus || ""}
            onChange={handleInputChange}
            placeholder="Finance, AR, VR, AI"
          />
        </fieldset>

        <button
          type="submit"
          className={`align-self-end btn-base ${
            investor ? "investor" : "startup"
          }`}
        >
          Save
        </button>
      </form>
      {fromSubmit && (
      <AfterSuccessPopup
            withoutOkButton
            onClose={() => setFromSubmit(!fromSubmit)}
            successText={popupData}
          />
          )}
    </div>
  );
}
