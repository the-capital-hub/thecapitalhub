import React from "react";
import AddUserIconBlack from "../../../../Images/investorIcon/Add-UserBlack.svg";
import profilePicUpma from "../../../../Images/Rectangle 1895.png";
import profilePicRaghu from '../../../../Images/aboutUs/Raghu.jpeg'
import "./recommendation.scss";

const RecommendationCard = () => {
  return (
    <>
      <div className="recommendation_main_container">
        <div className="col-12 recommendation_card">
          <div className="card mt-2 right_view_profile_card right_view_profile">
            <div className="card-header">
              <div className="title">
                <span>Recommendation</span>
              </div>
            </div>
            <div className="card-body recommendation_card_body ">
              <img src={profilePicRaghu} alt="img" className="rounded-circle" />
              <div className="recommendation_card_text">
                <h3>Raghukrishnan J</h3>
                <h4 className="smallest_typo">Senior Investment Analyst</h4>
                <button className="connect_button">
                  <img src={AddUserIconBlack} alt="add user" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
            <hr className="hr" />
            <div className="card-body recommendation_card_body ">
              <img src={profilePicUpma} alt="img" className="rounded-circle" />
              <div className="recommendation_card_text">
                <h3>Raju Prasain</h3>
                <h4 className="smallest_typo">
                  FullStack Developer
                </h4>
                <button className="connect_button">
                  <img src={AddUserIconBlack} alt="add user" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationCard;
