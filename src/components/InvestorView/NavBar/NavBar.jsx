import "./NavBar.scss";
import Logo from "../../../Images/investorIcon/Logo.svg";
import NotificationIcon from "../../../Images/investorIcon/notification.svg";
import MessageIcon from "../../../Images/investorIcon/message.svg";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import searchIcon from "../../../Images/investorIcon/searchIcon.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="container pt-1">
        <div className="row investor_view_navbar ">
          <div className="col-md-5 d-flex">
            <div className="row bar_logo_container ">
              <div className="logo_container">
                <img src={Logo} alt="bar" />
              </div>
            </div>
          </div>
          <div className="col-md-7 navbar_right_container">
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
              <div className="icon-wrapper">
                <Link to={"/investor/manage-account"}>
                  {" "}
                  <img className="profile-pic" src={profilePic} alt="Profile" />
                </Link>
                {/* <span className="me">Me</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
