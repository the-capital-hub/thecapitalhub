import React, { useState } from "react";
import "./SelectWhatYouAre.scss";
import StartUpIcon from "../../../Images/start_up.png";
import InvestorIcon from "../../../Images/investor_popup.png";

const SelectWhatYouAre = ({ onStartupClick, onInvestorClick }) => {
  const openStartUp = () => {
    onStartupClick();
  };
  const openInvestor = () => {
    onInvestorClick();
  };

  return (
    <>
      <div className="slection_container">
        <div className="popup-container">
          <div className="popup">
            <div className="back_and_home">
              <img src="back" alt="back" />
              <a href="/signup">Home</a>
            </div>
            <h1>Select One what you are.....!</h1>
            <div className="inside_popup">
              <div className="card">
                <img src={StartUpIcon} alt="Card 1" />
                <button onClick={openStartUp}>Startup</button>
              </div>
              <div className="card">
                <img src={InvestorIcon} alt="Card 2" />
                <button onClick={openInvestor}>Investor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectWhatYouAre;
