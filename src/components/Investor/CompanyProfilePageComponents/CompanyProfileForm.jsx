import React from "react";
import "./CompanyProfileForm.scss";

export default function CompanyProfileForm({ submitHandler }) {
  return (
    <>
      <form action="" onSubmit={submitHandler} className="">
        <fieldset>
          <legend>Company Name</legend>
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="profile_form_input"
          />
        </fieldset>

        <fieldset>
          <legend>Established Date</legend>
          <input
            type="date"
            name="establishedDate"
            id="establishedDate"
            className="profile_form_input"
          />
        </fieldset>

        <fieldset>
          <legend>Type of Industry</legend>
          <input
            type="text"
            name="typeOfIndustry"
            id="typeOfIndustry"
            className="profile_form_input"
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
          />
        </fieldset>

        <fieldset>
          <legend>Website URL</legend>
          <input
            type="url"
            name="siteUrl"
            id="siteUrl"
            className="profile_form_input"
          />
        </fieldset>

        <fieldset>
          <legend>Vision</legend>
          <input
            type="text"
            name="vision"
            id="vision"
            className="profile_form_input"
          />
        </fieldset>

        <fieldset>
          <legend>Mission</legend>
          <input
            type="text"
            name="mission"
            id="mission"
            className="profile_form_input"
          />
        </fieldset>
      </form>
    </>
  );
}
