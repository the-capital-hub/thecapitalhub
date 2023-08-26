import React from "react";
import AddUserIconBlack from "../../../../Images/investorIcon/Add-UserBlack.svg";
import profilePic from "../../../../Images/investorIcon/profilePic.webp";
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
              <img src={profilePic} alt="img" className="rounded-circle" />
              <div className="recommendation_card_text">
                <h3>Harideep</h3>
                <h4 className="smallest_typo">
                  UI/UX Designer/Product Designer
                </h4>
                <button>
                  <img src={AddUserIconBlack} alt="add user" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
            <hr className="hr" />
            <div className="card-body recommendation_card_body ">
              <img src={profilePic} alt="img" className="rounded-circle" />
              <div className="recommendation_card_text">
                <h3>Harideep</h3>
                <h4 className="smallest_typo">
                  UI/UX Designer/Product Designer
                </h4>
                <button>
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
