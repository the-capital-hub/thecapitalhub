import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import ArrowLeft from "../../../Images/investorsidebar/ArrowLeft.svg";
import ArrowRight from "../../../Images/investorsidebar/ArrowRight.svg";
import Setting from "../../../Images/investorsidebar/Settings.svg";
// import Support from "../../../Images/investorsidebar/Support.svg";
import HomeIcon from "../../../Images/investorIcon/home.svg";
import BookIcon from "../../../Images/investorIcon/Book.svg";
import ExitIcon from "../../../Images/investorIcon/Exit.svg";
// import GroupIcon from "../../../Images/investorIcon/Group.svg";
// import InvestorIcon from "../../../Images/investorIcon/Pot.svg";
import SaveIcon from "../../../Images/investorIcon/Save.svg";
import PlusIcon from "../../../Images/investorIcon/Plus.svg";
import { BsLink45Deg, BsChevronDown, BsChevronUp } from "react-icons/bs";
import "react-pro-sidebar/dist/css/styles.css";
import "./investorsidebar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogOutPopUp from "../../PopUp/LogOutPopUp/LogOutPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/features/user/userSlice";
import connectionsIcon from "../../../Images/investorsidebar/connection.svg";
import CommunitiesIcon from "../ChatComponents/CommunitiesIcon";
import ModalBsLauncher from "../../PopUp/ModalBS/ModalBsLauncher/ModalBsLauncher";
import companyProfileIcon from "../../../Images/StartUp/Sidebar/companyProfile.svg";
import ExploreIcon from "../../../Images/Investor/Sidebar/explore.svg";

// Startup Sidebar
const InvestorSidebar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const isMobileView = useSelector((state) => state.design.isMobileView);

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isCommunityDetailOpen, setIsCommunityDetailOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Methods
  const menuIconClick = () => {
    setSidebarCollapsed(true);
  };

  const handleLogout = () => {
    // Step 3: Show the logout popup
    setShowLogoutPopup(true);
  };

  const handleLogoutLogic = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  function handleMyCommunityClick() {
    navigate("/chats?isCommunityOpen=true");
  }

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const deltaX = touchEndX - touchStartX;
      if (deltaX < -50) {
        setSidebarCollapsed(false); // Expand the sidebar
      } else if (deltaX > 50) {
        setSidebarCollapsed(true); // Collapse the sidebar
      }
      setTouchStartX(null);
      setTouchEndX(null);
    }
  };

  return (
    <div
      className={`startup_sidebar ${sidebarCollapsed ? "collapsed" : ""}`}
      onMouseLeave={() => {
        if (!isMobileView) {
          setSidebarCollapsed(true);
          setIsCommunityDetailOpen(false);
        }
      }}
      onMouseEnter={() => {
        if (!isMobileView) {
          setSidebarCollapsed(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`close-menu ${
          !sidebarCollapsed && "close-btn-collapsed"
        } d-none`}
        onClick={menuIconClick}
      >
        {sidebarCollapsed ? (
          <img className="close-menu-right" src={ArrowRight} alt="right icon" />
        ) : (
          <img className="close-menu-left" src={ArrowLeft} alt="right icon" />
        )}
      </div>
      <div id="header">
        <ProSidebar collapsed={sidebarCollapsed}>
          <SidebarHeader>
            <div className="logotext">
              {sidebarCollapsed ? (
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to={"/profile"}
                >
                  {" "}
                  <img
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    src={loggedInUser.profilePicture}
                    alt="User profile"
                  />
                </Link>
              ) : (
                <>
                  <Link
                    // onClick={() => setSidebarCollapsed(true)}
                    to={"/profile"}
                  >
                    {" "}
                    <img
                      className="rounded-circle"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                      src={loggedInUser.profilePicture}
                      alt="Profile"
                    />
                  </Link>
                  <h3 className="">
                    {loggedInUser?.firstName} {loggedInUser?.lastName}
                  </h3>
                  <h4>{loggedInUser?.email}</h4>
                </>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round">
              <MenuItem
                // active={location.pathname.includes("/")}
                className=""
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="home?showPopup=true"
                  id="sidebar_createAPost"
                >
                  {sidebarCollapsed ? (
                    <>
                      <button className="plus_btn">
                        <img src={PlusIcon} alt="Plus icon" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="create_post px-3">
                        <span className="ms-0">Create a post</span>
                        <img src={PlusIcon} alt="Plus icon" />
                      </button>
                    </>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/home")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/home"
                >
                  <img src={HomeIcon} alt="Home" />
                  {!sidebarCollapsed && <span>Home</span>}
                </Link>
              </MenuItem>

              <MenuItem
                active={location.pathname.includes("/company-profile")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/company-profile"
                  id="sidebar_companyProfile"
                >
                  <img src={companyProfileIcon} alt="company" />
                  {!sidebarCollapsed && <span>Company</span>}
                </Link>
              </MenuItem>

              {/* Explore */}
              <MenuItem
                active={location.pathname.includes("/explore")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/explore"
                  id="sidebar_explore"
                >
                  <img src={ExploreIcon} alt="explore" />
                  {!sidebarCollapsed && <span>Explore</span>}
                </Link>
              </MenuItem>

              <MenuItem
                active={location.pathname.includes("/onelink")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/onelink"
                  id="sidebar_oneLink"
                >
                  {/* <img src={OnelinkIcon} alt="image" width="17px" height="17px" /> */}
                  <BsLink45Deg height={"59px"} width={"59px"} size={"20px"} />
                  {!sidebarCollapsed && <span>OneLink</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/chats")}
                className="active-item"
              >
                <div
                  className="sidebar__community d-flex gap-4 "
                  id="sidebar_community"
                >
                  <div
                    onClick={() => {
                      setSidebarCollapsed(true);
                      setIsCommunityDetailOpen(false);
                    }}
                  >
                    <CommunitiesIcon
                      width="17px"
                      height="17px"
                      color={`${
                        isCommunityDetailOpen
                          ? "#fd5901"
                          : "rgba(97, 97, 97, 1)"
                      }`}
                    />
                  </div>
                  {!sidebarCollapsed && (
                    <details className="">
                      <summary
                        className="d-flex align-items-center gap-2"
                        onClick={() =>
                          setIsCommunityDetailOpen(!isCommunityDetailOpen)
                        }
                      >
                        Community
                        {isCommunityDetailOpen ? (
                          <BsChevronUp />
                        ) : (
                          <BsChevronDown />
                        )}
                      </summary>
                      <div className="d-flex flex-column gap-2">
                        {/* Add new */}
                        <ModalBsLauncher
                          id="AddNewCommunity"
                          className="sidebar__community__btn m-0 "
                        >
                          <p className="m-0">Create a Community</p>
                        </ModalBsLauncher>
                        <button
                          className="sidebar__community__btn shadow-none"
                          onClick={handleMyCommunityClick}
                        >
                          My Community
                        </button>
                      </div>
                    </details>
                  )}
                </div>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/documentation")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/documentation"
                  id="sidebar_documentation"
                >
                  <img
                    src={BookIcon}
                    alt="documentation"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Documentation</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/savePost")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/savePost"
                  id="sidebar_savedPosts"
                >
                  <img
                    src={SaveIcon}
                    alt="saved posts"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Saved posts</span>}
                </Link>
              </MenuItem>

              <MenuItem
                active={location.pathname.includes("/connection")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/connection"
                  id="sidebar_connections"
                >
                  <img
                    src={connectionsIcon}
                    alt="connections"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Connnections</span>}
                </Link>
              </MenuItem>

              {/* <MenuItem
                active={location.pathname.includes("/team")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/team"
                >
                  <img src={GroupIcon} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Team</span>}
                </Link>
              </MenuItem> */}
              {/* <MenuItem
                active={location.pathname.includes("/customers")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/customers"
                >
                  <img src={Setting} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Customers</span>}
                </Link>
              </MenuItem> */}
              {/* <MenuItem
                active={location.pathname.includes("/investors")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investors"
                >
                  <img
                    src={InvestorIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Investors</span>}
                </Link>
              </MenuItem> */}
              <MenuItem
                active={location.pathname.includes("/help")}
                className="active-item"
              >
                <Link
                  //  onClick={() => setSidebarCollapsed(true)}
                  to="/help"
                >
                  <img src={Setting} alt="help" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Help</span>}
                </Link>
              </MenuItem>
              <MenuItem
                // active={location.pathname.includes("")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/"
                >
                  <img src={HomeIcon} alt="go to platform" />
                  {!sidebarCollapsed && <span>Learn More</span>}
                </Link>
              </MenuItem>
              <hr className="hr-above-support" />
              {/* <MenuItem
                active={location.pathname.includes("/support")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/support"
                >
                  <img src={Support} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Support</span>}
                </Link>
              </MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="round">
              <MenuItem onClick={handleLogout}>
                <img src={ExitIcon} alt="logout" width="17px" height="17px" />
                {!sidebarCollapsed && <span>Log out</span>}
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      {showLogoutPopup && (
        <LogOutPopUp
          setShowLogoutPopup={setShowLogoutPopup} // Make sure this prop is passed correctly
          handleLogoutLogic={handleLogoutLogic}
          showLogoutPopup
        />
      )}
    </div>
  );
};

export default InvestorSidebar;
