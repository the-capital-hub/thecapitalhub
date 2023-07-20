import React from "react";
import './whychooseus.scss'
import G1Icon from "../../../../Images/Group 1 (1).svg";
import G2Icon from "../../../../Images/Group 2 (1).svg";
import G3Icon from "../../../../Images/Group 2 (2).svg";
import G4Icon from "../../../../Images/Group 3.svg";
import G5Icon from "../../../../Images/Group 4.svg";
import G6Icon from "../../../../Images/Group 5.svg";

const WhyChooseUsCard = () => {
  return (
    <>
      <div className="why_choose_us row justify-content-around align-items-center my-4">
        <h2 className="text-center mb-5 mt-5">Why choose us</h2>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G1Icon} alt="img" />
            <h3>Angel Investor</h3>
            <p>
              Discover strategic investment opportunities and connect with
              promising startups through our platform, empowering you to make a
              lasting impact on the entrepreneurial ecosystem.
            </p>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G2Icon} alt="img" />
            <h3>One link</h3>
            <p>
              Consolidate all your digital presence into a single, shareable
              link. Streamline your online identity and make it easier for
              others to explore your portfolio, projects, and social media
              profiles effortlessly.
            </p>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G3Icon} alt="img" />
            <h3>Networking</h3>
            <p>
              Expand your professional network and forge valuable connections
              with industry leaders, entrepreneurs, and like-minded individuals.
              Unlock endless possibilities for collaboration, mentorship, and
              career growth.
            </p>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G4Icon} alt="img" />
            <h3>Team Management</h3>
            <p>
              Efficiently coordinate and oversee your team's tasks, deadlines,
              and progress with our intuitive Team Management solution.
              Streamline communication, boost productivity, and foster a
              cohesive work environment.
            </p>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G5Icon} alt="img" />
            <h3>Client Management(CRM)</h3>
            <p>
              Simplify your client interactions and streamline your sales
              process with our Client Management system. From lead generation to
              nurturing relationships, our tools help you deliver exceptional
              customer experiences.
            </p>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G6Icon} alt="img" />
            <h3>Investor Management(IRM)</h3>
            <p>
              Effectively manage your investor relationships, track funding
              rounds, and keep stakeholders informed. Our Investor Management
              solution provides the tools to streamline communication and foster
              investor confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsCard;
