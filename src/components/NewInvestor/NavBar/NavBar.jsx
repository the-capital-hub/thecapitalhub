import React from "react";
import "./NavBar.scss";
import searchIconBlack from "../../../Images/navbar/Search.svg";
import Logo from "../../../Images/investorIcon/Logo.svg";
import NotificationIcon from "../../../Images/investorIcon/notification.svg";
import MessageIcon from "../../../Images/investorIcon/message.svg";
import searchIcon from "../../../Images/investorIcon/searchIcon.svg";
import HambergerIcon from "../../../Images/Hamberger.svg";
import HambergerCrossIcon from "../../../Images/investorsidebar/FontX.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const NavBar = (props) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [url, setUrl] = useState("Home");

  useEffect(() => {
    const url = window.location.href.split("/");
    setUrl(url[url.length - 1]);
  }, [window.location.href]);

  return (
    <>
      <div className="container pt-1">
        <div className="d-flex newInvestor_navbar justify-content-between">
          <div className="d-flex">
            <div className="row bar_logo_container ">
              <div className="logo_container">
                <img src={Logo} alt="bar" />
              </div>
              <div
                className="mobile-home-hamberger"
                onClick={props.handleSidebarToggle}
              >
                {props.sidebarCollapsed ? (
                  <img src={HambergerIcon} alt="bar" />
                ) : (
                  <img src={HambergerCrossIcon} alt="bar" />
                )}
                <h1 className="ms-2">{url}</h1>
              </div>
            </div>
          </div>
          <div className="navbar_right_container">
            <div className="searchbar-container">
              <input
                type="text"
                className="searchbar-input"
                placeholder="Search"
              />
              <button className="searchbar-button">
                <img src={searchIcon} alt="search" />
              </button>
            </div>

            <div className="icons-container">
              <div className="mobile-icon-wrapper ">
                <span className="notification-icon">
                  <img src={searchIconBlack} alt="notification" />
                </span>
              </div>

              <div className="icon-wrapper">
                <span className="notification-icon">
                  <img src={NotificationIcon} alt="notification" />
                </span>
              </div>
              <div className="icon-wrapper">
                <span className="message-icon">
                  <img src={MessageIcon} alt="message" />
                </span>
              </div>
              {/* <div className="icon-wrapper d-none d-md-block"> */}
              <div className="icon-wrapper">
                <Link to={"/manage-account"}>
                  {" "}
                  <img
                    className="profile-pic rounded-circle"
                    src={loggedInUser.profilePicture}
                    alt="Profile"
                  />
                </Link>
                {/* <span className="me">Me</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
