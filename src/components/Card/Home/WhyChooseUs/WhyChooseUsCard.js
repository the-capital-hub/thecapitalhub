import React from "react";
import "./whychooseus.scss";
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
        <h2 className="text-center text_center ">Why choose us</h2>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G1Icon} alt="img" />
            <h3>Angel Investor</h3>
            <h4>
              Discover the perfect angel investors aligned with your preferences
              through our advanced filtering system, as finding the right
              investor is crucial for your startup's success.
            </h4>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G2Icon} alt="img" />
            <h3>One link</h3>
            <h4>
              Streamline your startup's communication by sharing all vital
              information, including pitch decks and documents, effortlessly
              with a single, easily accessible link.
            </h4>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G3Icon} alt="img" />
            <h3>Networking</h3>
            <h4>
              Expand your horizons by connecting and learning from experienced
              leaders, mentors, and angel investors, fostering valuable
              relationships to fuel your startup's growth.
            </h4>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G4Icon} alt="img" />
            <h3>Team Management</h3>
            <h4>
              Optimize team collaboration and productivity by adding members,
              creating a vision board, and assigning tasks, all within an
              efficient and cohesive environment for seamless teamwork.
            </h4>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G5Icon} alt="img" />
            <h3>Client Management(CRM)</h3>
            <h4>
              Simplify client interactions with comprehensive management tools,
              including payment and workflow tracking, invoice creation, and
              easy payment processing for a seamless client experience.
            </h4>
          </div>
        </div>
        <div className="col-md-4 b why_chooseus_card mb-69">
          <div className="row d-flex justify-content-center align-item-center inside_card">
            <img src={G6Icon} alt="img" />
            <h3>Investor Management(IRM)</h3>
            <h4>
              Cultivate and nurture investor relationships with our platform's
              dedicated tools, segmenting and engaging with potential investors
              while effortlessly sharing your startup's details in just one
              click.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsCard;
