import React from "react";
import "./InvestorOneLinkProfile.scss";
import { useOutletContext } from "react-router";
import PublicLinks from "../../../components/NewInvestor/CompanyProfileComponents/company-section-two/public-links/PublicLinks";

export default function InvestorOneLinkProfile() {
  const { investor, company } = useOutletContext();
  let socialLinks = {
    website: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  };

  return (
    <div className="investor_one_link_profile_page d-flex flex-column">
      <h1 className="mb-3 px-3 px-xxl-0 fw-bold page_heading">
        Investor Profile
      </h1>
      <div className="main_inner-section d-flex flex-column gap-3 p-3 border">
        <div className="user_data_section d-flex flex-row gap-3 py-3">
          <img
            src={investor?.profilePicture}
            alt="user_img"
            className="rounded-pill"
          />
          <div className="user_data ">
            <h1>
              {investor?.firstName} {investor?.lastName}
            </h1>
            <p>
              {investor?.designation} at {company?.companyName}
            </p>
            <p>{investor?.location}</p>
          </div>
        </div>
        <div className="bio_section shadow-sm">
          <h1 className="px-2 rounded-pill">Bio</h1>
          <div className="experience_data d-flex flex-column flex-md-row gap-2 gap-md-4 p-3">
            <p>{investor?.bio}</p>
          </div>
        </div>
        <div className="experience_section ">
          <h1 className="px-2 rounded-pill">Current Experience</h1>
          <div className="experience_data d-flex flex-column flex-md-row gap-2 gap-md-4 p-3">
            <p>{investor?.experience}</p>
          </div>
        </div>
        <div className="social_media_section d-flex flex-column gap-1 py-2">
          <p>Social Links</p>
          <div className="link_icons d-flex flex-row flex-md-row gap-2">
            <PublicLinks socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </div>
  );
}
