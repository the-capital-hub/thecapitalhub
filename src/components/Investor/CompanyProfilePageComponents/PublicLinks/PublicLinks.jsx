import React, { useState } from "react";
import { useSelector } from "react-redux";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";

const PublicLinks = ({
  publicLinks,
  loading,
  setPublicLinks,
  investor = false,
}) => {
  const { isInvestor } = useSelector((state) => state.user.loggedInUser);
  
  return (
    <div
      className={`paragraph__component py-5 px-3 px-md-5 d-flex flex-column gap-4  ${
        isInvestor === "true" ? "rounded-4 border" : "rounded-4"
      } `}
      style={{ color: "var(--d-l-grey)" }}
    >
      <div className="d-flex flex-column-reverse flex-sm-row align-items-sm-center justify-content-between gap-3 gap-md-0">
        <h3>Public Links</h3>
      </div>
      <div className="profile__form">
        <form action="" className="">
          <fieldset className={investor ? "investor" : "startup"}>
            <legend>Website Link</legend>
            <input
              type="text"
              name="website"
              id="website"
              className="profile_form_input"
              value={publicLinks?.website || ""}
              //onChange={handleInputChange}
            />
          </fieldset>
          <fieldset className={investor ? "investor" : "startup"}>
            <legend>Linkedin</legend>
            <input
              type="text"
              name="website"
              id="website"
              className="profile_form_input"
              value={publicLinks?.linkedin || ""}
              //onChange={handleInputChange}
            />
          </fieldset>
          <fieldset className={investor ? "investor" : "startup"}>
            <legend>Twitter</legend>
            <input
              type="text"
              name="website"
              id="website"
              className="profile_form_input"
              value={publicLinks?.twitter || ""}
              //onChange={handleInputChange}
            />
          </fieldset>
          <fieldset className={investor ? "investor" : "startup"}>
            <legend>Instagram</legend>
            <input
              type="text"
              name="website"
              id="website"
              className="profile_form_input"
              value={publicLinks?.instagram || ""}
              //onChange={handleInputChange}
            />
          </fieldset>
          <button
            className={`align-self-end btn-base ${
              isInvestor === "true" ? "investor" : "startup"
            }`}
          >
            {loading ? (
              <SpinnerBS
                colorClass={`${
                  isInvestor === "true" ? "text-dark" : "text-white"
                }`}
                spinnerSizeClass="spinner-border-sm"
              />
            ) : (
              "Save"
            )}
            {/* <CiSaveUp2 /> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublicLinks;
