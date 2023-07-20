import React from "react";
import "./aboutus.scss";
import CoInvestorCard from "../Card/AboutUs/CoInvestor/CoInvestorCard";
import MeetOurTeam from "../Card/AboutUs/MeetOurTeam/MeetOurTeam";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid aboutus_container">
        <div className="row title_text_row">
          <h2>Helping millions of Indians make Startup</h2>
        </div>
        <div className="container">
          <div className="about_us_title_text">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Consequat facilisis arcu
              fermentum enim venenatis quis tincidunt dignissim. Mi diam
              interdum cursus sed viverra quam lorem. Massa eget diam
              suspendisse iaculis sed commodo facilisis tortor elementum. Orci
              varius mi sapien vestibulum. At vitae tincidunt ac habitant id
              quis elit molestie malesuada. Blandit.
            </p>
          </div>

          <div className="founder_section mb-5">
            <h1>Founder</h1>
            <div className="founder_container mt-5">
              <div className="image ">
                <img src="" alt="" />
              </div>

              <div className="text_content">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur. At consequat purus
                  hendrerit proin risus tempor ultrices. Sit purus ante dictum
                  in malesuada id. Tincidunt massa purus nascetur elit
                  ullamcorper ac sit in. Egestas vitae lobortis tellus.
                </p>
                <span>Lorem ipsum</span>
                <h2>Co-founder & CEO, Capital Hub</h2>
              </div>
            </div>
          </div>

          <div className="about_us_title_text">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus tempor ultrices. Sit purus ante dictum in
              malesuada id. Tincidunt massa purus nascetur elit ullamcorper ac
              sit in. Egestas vitae lobortis tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Consequat facilisis arcu
              fermentum enim venenatis quis tincidunt dignissim. Mi diam
              interdum cursus sed viverra quam lorem. Massa eget diam
              suspendisse iaculis sed commodo facilisis tortor elementum. Orci
              varius mi sapien vestibulum. At vitae tincidunt ac habitant id
              quis elit molestie malesuada. Blandit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus tempor ultrices. Sit purus ante dictum in
              malesuada id. Tincidunt massa purus nascetur elit ullamcorper ac
              sit in. Egestas vitae lobortis tellus.
            </p>
          </div>

          <div className="about_us_title_text mt-5">
            <h2 className="mb-5">Co-investors</h2>
            <CoInvestorCard />
          </div>

          <div className="about_us_title_text mt-5">
            <h2 className="mb-5">Meet our team</h2>
            <MeetOurTeam />
          </div>

          <div className="about_us_title_text mt-5">
            <h2 className="mb-4"> Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus tempor ultrices. Sit purus ante dictum in
              malesuada id. Tincidunt massa purus nascetur elit ullamcorper ac
              sit in. Egestas vitae lobortis tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus tempor ultrices. Sit purus ante dictum in
              malesuada id. Tincidunt massa purus nascetur elit ullamcorper ac
              sit in. Egestas vitae lobortis tellus.
            </p>
          </div>

          <div className="about_us_title_text mt-5 our_service">
            <h2 className="mb-5">Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus tempor ultrices. Sit purus ante dictum in
              malesuada id. Tincidunt massa purus nascetur elit ullamcorper ac
              sit in. Egestas vitae lobortis tellus.
            </p>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur. At ipsum.</li>
                <li>Lorem ipsum dolor sit amet consectetur. At ipsum.</li>
                <li>Lorem ipsum dolor sit amet consectetur. At ipsum.</li>
                <li>Lorem ipsum dolor sit amet consectetur. At ipsum.</li>
                <li>Lorem ipsum dolor sit amet consectetur. At ipsum.</li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
