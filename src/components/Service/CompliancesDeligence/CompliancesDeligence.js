import React from "react";
import "./CompliancesDeligence.scss";
import serviceSixIcon from "../../../Images/service/Group 15404.svg";

import listIcon from "../../../Images/ListDot.svg";

const CompliancesDeligence = () => {
  return (
    <>
      <div className="container-fluid complience_main_container">
        <div className="container">
          <section className="heading_section_fund">
            <h1>
              We offer the best
              <span style={{ color: "#FD5901" }}> services</span>
            </h1>

            <div className="title_and_image">
              <img src={serviceSixIcon} alt="" />
              <h2>COMPLIANCES AND DUE DILIGENCE</h2>
            </div>

            <p className="mt-4">
              Capital HUB supports startups with compliance and DD services as
              part of their fundraising journey. Capital HUB extensive services
              to incorporate startups, startup India registration, and due
              diligence.
            </p>
          </section>
          <section className="title_text_description ">
            <h1 className="underline_title">Company Registration</h1>
            <p>
              Our Pvt Ltd Registration Packages Includes
              <br /> DIN and DSC <br />
              Drafting of MoA & AoA <br />
              Government Stamp duty <br />
              Company Incorporation Certificate
              <br />
              Company PAN and TAN
              <br /> Certificate of commencement of business
            </p>
          </section>

          <section className="list_section">
            <ul>
              <h1 className="element_underline_one">
                Elements of Due Diligence in M&A Transactions
              </h1>
              <p>
                A comprehensive due diligence program will review and analyze
                several key aspects of the business. Typically, these areas are:
              </p>
              <li>
                <div>Commercial due diligence;</div>{" "}
              </li>

              <li>
                <div>Legal due diligence;</div>{" "}
              </li>

              <li>
                <div>Financial due diligence;</div>{" "}
              </li>

              <li>
                <div>Management due diligence;</div>{" "}
              </li>

              <li>
                <div>Other</div>{" "}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default CompliancesDeligence;
