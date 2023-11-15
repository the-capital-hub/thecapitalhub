import React, { useState } from "react";
import "./LogOutPopUp.scss";
import CorrectIcon from "../../../Images/investorsidebar/Log-out.svg";

const LogOutPopUp = ({
  setShowLogoutPopup,
  handleLogoutLogic,
  showLogoutPopup,
  isInvestor = false
}) => {
  const handleLogout = () => {
    handleLogoutLogic();
    setShowLogoutPopup(false);
  };

  const handleCancel = () => {
    setShowLogoutPopup(false);
  };

  const buttonColor = isInvestor ? "#d3f36b" : "#fd5901";
  const textColor = isInvestor ? "#000" : "#FD5901";
  const buttonText = isInvestor ? "#000" : "#fff";

  return (
    <>
   {showLogoutPopup && (
        <div className="logout_popup">
          <div className="popup">
            <div className="popup-content ">
              <img src={CorrectIcon} alt="image " />
              <h1>
                Are you sure you want to &nbsp;
                <span style={{ color: textColor }}>Log Out?</span>
              </h1>
              {/* <button className="ok_button">OK</button> */}
              <div className="d-flex flex-wrap gap-2 justify-content-center">

              <button  className="cancel_button " onClick={handleCancel}>Cancel</button>
              <button className="ok_button" style={{ backgroundColor: buttonColor, color: buttonText }} onClick={handleLogout}>Log out</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogOutPopUp;
