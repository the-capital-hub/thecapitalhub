import React, { useState } from "react";
import "./LogOutPopUp.scss";
import CorrectIcon from "../../../Images/investorsidebar/Log-out.svg";

const LogOutPopUp = ({
  setShowLogoutPopup,
  handleLogoutLogic,
  showLogoutPopup,
}) => {
  const handleLogout = () => {
    handleLogoutLogic();
    setShowLogoutPopup(false);
  };

  const handleCancel = () => {
    setShowLogoutPopup(false);
  };

  return (
    <>
   {showLogoutPopup && (
        <div className="logout_popup">
          <div className="popup">
            <div className="popup-content">
              <img src={CorrectIcon} alt="" />
              <h1>
                Are you sure you want to &nbsp;
                <span style={{ color: "#FD5901" }}>Log Out?</span>
              </h1>
              {/* <button className="ok_button">OK</button> */}
              <button  className="cancel_button " onClick={handleCancel}>Cancel</button>
              <button className="ok_button" onClick={handleLogout}>Log out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogOutPopUp;
