import React from "react";
import './InvestorOneLinkProfile.scss'
import pramod from "../../../Images/aboutUs/Pramod.jpeg"
import assets from '../../../Images/investorOneLink/profile/index'

 
export default function InvestorOneLinkProfile() {
  return (
    <div className="investor_one_link_profile_page d-flex flex-column">
      <h1>Investor Profile</h1>
      <div className="main_inner-section d-flex flex-column gap-3">
        <div className="user_data_section d-flex flex-row gap-3 py-3">
          <img src={pramod} alt="user_img"  className="rounded-pill"/>
          <div className="user_data ">
            <h1>Pramod badiger</h1>
            <p>Founder & CEO of capital Hub</p>
            <p>Bangalore , India</p>
          </div>
        </div>
        <div className="bio_section shadow-sm">
          <h1 className="px-2 rounded-pill">Bio</h1>
        </div>
        <div className="experience_section ">
          <h1  className="px-2 rounded-pill" >Current Experience</h1>
          <div className="experience_data d-flex flex-column flex-md-row gap-2 gap-md-4 p-3">
            <h2>Experience:</h2>
            <p>
              5+ Years building various startups <br />
              Mentored 21 startups <br />
              Growth $ 10M+
            </p>
          </div>
        </div>
        <div className="social_media_section d-flex flex-column gap-1 py-2">
          <p>Social Links</p>
          <div className="link_icons d-flex flex-row flex-md-row gap-2">
            <div className=" d-flex flex-row gap-2 align-items-center">
            <img src={assets.instgram} alt="Instagram" />
            <span>Instagram</span>
            </div>
            <div className=" d-flex flex-row gap-2 align-items-center">
            <img src={assets.facebook} alt="Facebook" />
            <span>Facebook</span>
            </div>
            <div className=" d-flex flex-row gap-2 align-items-center">
            <img src={assets.twitter} alt="Twitter" />
            <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
