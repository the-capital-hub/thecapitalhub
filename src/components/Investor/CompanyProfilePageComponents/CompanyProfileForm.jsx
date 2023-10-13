import React, { useState, useEffect, useRef } from "react";
import "./CompanyProfileForm.scss";
import { postStartUpData, postInvestorData } from "../../../Service/user";
import { getBase64 } from "../../../utils/getBase64";
import AfterSuccessPopup from "../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";

const LOCATIONS = [
  "Select Location",
  "New Delhi",
  "Gurgaon",
  "Mumbai",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Bengaluru",
  "Mangalore",
  "Kochi",
  "Lucknow",
  "Kolkata",
  "Others",
];

const SECTORS = [
  "Select Sector",
  "FMCG",
  "Restaurants",
  "Education",
  "Tourism",
  "Automobile",
  "Textile",
  "Chemicals",
  "Telecommunications",
  "Oil and Gas",
  "Renewable Energy",
  "Investment Banking and Venture Capital",
  "NBFC",
  "Biotechnology",
  "Software Development Services",
  "Computer and Information Technology",
  "Aerospace",
  "Sales and Marketing",
  "Pharmaceutical",
];

export default function CompanyProfileForm({ companyData, investor = false }) {
  // States for form
  const [formData, setFormData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [othersClicked, setOthersClicked] = useState(false);

  // States for popup
  const [fromSubmit, setFromSubmit] = useState(false);
  const [popupData, setPopupData] = useState("");

  useEffect(() => {
    if (investor) {
      setFormData({
        founderId: companyData.founderId || "",
        company: companyData.companyName || "",
        tagline: companyData.tagline || "",
        location: companyData.location || LOCATIONS[0],
        startedAtDate: companyData.startedAtDate || "",
        industryType: companyData.industry || "",
        sector: companyData.sector || SECTORS[0],
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

  // Handle input change
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

  // Handle File Input change
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // Handle Location select
  const handleLocationSelect = (e, location) => {
    if (location === LOCATIONS[0]) return;
    if (location === "Others") {
      setOthersClicked(true);
    }
    setFormData((prevData) => ({ ...prevData, location: location }));
  };

  // Handle Dropdown Blur
  const handleDropdownBlur = () => {
    setOthersClicked(false);
    setFormData((prevData) => ({
      ...prevData,
      location: companyData.location,
    }));
  };

  // Handle Sector Select
  const handleSectorSelect = (e, sector) => {
    if (sector === SECTORS[0]) return;
    setFormData((prevData) => ({ ...prevData, sector: sector }));
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
        setPopupData("Changes saved");
        setFromSubmit(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("companyData", companyData.sector);
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
          <legend>Company Tagline</legend>
          <input
            type="text"
            name="tagline"
            id="tagline"
            className="profile_form_input"
            value={formData.tagline || ""}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className={investor ? "investor" : "startup"}>
          <legend>Location</legend>
          {othersClicked && (
            <input
              type="text"
              name="location"
              id="location"
              className="profile_form_input"
              placeholder={formData.location + "..."}
              // value={formData.location || ""}
              onChange={handleInputChange}
              onBlur={handleDropdownBlur}
              autoFocus
            />
          )}
          {/* Location Dropdown */}
          {!othersClicked && (
            <div className="dropdown">
              <button
                className="btn profile_form_input w-auto dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.location}
              </button>
              <ul className="dropdown-menu m-0 p-0">
                {LOCATIONS.map((location, index) => {
                  return (
                    <li key={`${location}${index}`} className="m-0 p-0">
                      <button
                        type="button"
                        className={`btn btn-base list-btn w-100 text-start ps-3 ${
                          investor ? "investor" : "startup"
                        } ${location === formData.location ? "selected" : ""}`}
                        onClick={(e) => handleLocationSelect(e, location)}
                      >
                        {location}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
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
          <legend>Sector</legend>
          {/* <input
            type="text"
            name="sector"
            id="sector"
            className="profile_form_input"
            value={formData.sector || ""}
            onChange={handleInputChange}
          /> */}
          {/* sector dropdown */}
          <div className="dropdown">
            <button
              className="btn profile_form_input w-auto dropdown-toggle sector_text"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{formData.sector}</span>
            </button>
            <ul className="dropdown-menu m-0 p-0">
              {SECTORS.map((sector, index) => {
                return (
                  <li key={`${sector}${index}`} className="m-0 p-0">
                    <button
                      type="button"
                      className={`btn btn-base list-btn text-start ps-3 text-break ${
                        investor ? "investor" : "startup"
                      } ${sector === formData.sector ? "selected" : ""}`}
                      onClick={(e) => handleSectorSelect(e, sector)}
                    >
                      <p className="m-0">{sector}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
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
