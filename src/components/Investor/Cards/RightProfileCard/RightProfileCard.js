import React from "react";
import "./rightProfileCard.css";
import profilePic from "../../../../Images/investorIcon/profilePic.svg";
import LoopIcon from "../../../../Images/investorIcon/LoopIcon.svg";

const RightProfileCard = () => {
  return (
    <>
      <div className="col-12">
        <div className="box view_profile" style={{ width: "100%" }}>
          <div className="view_profile_name_section mt-2">
            <img src={profilePic} alt="profileimage" />
            <div className="right_profile_text flex_content">
              <h2 className="typography">Pramod badiger</h2>
              <span className="smallest_typo">pramodbadigar@gmail.com</span>
              <span className="smallest_typo">
                Founder & CEO of capital Hub
              </span>
            </div>
            <button className="profile_btn mt-2">View Profile</button>
            <button className="profile_btn mt-1 manage_acount_btn">
              Manage Account
            </button>
            {/* loop */}
            <div className="card mt-2 right_view_profile_card right_loop_card ">
              <div className="card-header">
                <div className="loop_title">
                  <span>Loop</span>
                  <span style={{ fontSize: "10px" }}>
                    -Your Virtual Assistant
                  </span>
                </div>
                <img src={LoopIcon} alt="loop" />
              </div>
              <div className="card-body">
                <h5 className="card-title">How can I help you today?</h5>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message and loop me in"
                  />
                  <button className="btn btn-primary send-button" type="button">
                    send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightProfileCard;
