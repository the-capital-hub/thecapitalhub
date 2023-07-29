import React from "react";
import "./style.scss";
import serviceOneIcon from "../../Images/service/Group 15409.svg";
import BackIcon from "../../Images/BackIcon.svg";
import { Link } from "react-router-dom";
import InvestorIcon from "../../Images/ourInvestor/InvestorIcon.png";
import OurInvestorCard from "../Card/OurInvestorCard/OurInvestorCard";

const OurInvestor = () => {
  return (
    <>
      <div className="container-fluid investor_main_container">
        <div className="container">
          <Link to={"/"}>
            <img src={BackIcon} alt="back" />
            Back
          </Link>
          <section className="heading_section_investor">
            <div className="title_and_image">
              <img src={serviceOneIcon} alt="" />
              <h2>Investor</h2>
            </div>
          </section>

          <section className="row image_and_text">
            <div className="col-lg-4 col-md-12">
              <div className="image_section">
                <img src={InvestorIcon} alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="text_section">
                <h1>READY TO BE AN ANGEL INVESTOR?</h1>
                <p>
                  We got you covered. Begin your journey of Angel investment
                  with as low as INR 2.5 - 5 Lakhs. Yes, you heard it right,
                  Capital HUB focuses on connecting angels with the right
                  startups in their preferred area and industry of investment.
                  <br />
                  <br />
                  Capital HUB always provides investors with Verified,
                  authenticated, and fully documented startups. Capital HUB
                  focuses on the 3M's (management, Market, and mathematics ),
                  Product or tech, Startup stage, Founder's experience, Current
                  traction, and many more to help find the right fit to begin
                  your angel investment journey with Capital HUB.
                </p>
              </div>
            </div>
          </section>
          <section className="row benifits_container">
            <h1>BENEFITS OF BEING AN ANGEL INVESTOR WITH CAPITAL HUB</h1>
            <OurInvestorCard />
          </section>
          {/* <section className="heading_section_investor">
            <div className="title_and_image">
              <h2>TESTIMONIALS</h2>
            </div>
            <p>We love our customers and they love us back</p>

          </section> */}
        </div>
      </div>
    </>
  );
};

export default OurInvestor;
