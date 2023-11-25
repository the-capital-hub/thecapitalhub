import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
// import ArrowLeft from "../../../Images/investorsidebar/ArrowLeft.svg";
// import ArrowRight from "../../../Images/investorsidebar/ArrowRight.svg";
// import Setting from "../../../Images/investorsidebar/Settings.svg";
// import Support from "../../../Images/investorsidebar/Support.svg";
import HomeIcon from "../../../Images/investorIcon/home.svg";
import myStartUpIcon from "../../../Images/Investor/Sidebar/MyStartUps.svg";
import exploreIcon from "../../../Images/Investor/Sidebar/explore.svg";
// import syndicateIcon from "../../../Images/Investor/Sidebar/syndicates.svg";
// import liveDealsIcon from "../../../Images/Investor/Sidebar/Live Deals.svg";
import mySchedulesIcon from "../../../Images/Investor/Sidebar/My Schedules.svg";
import savedPostsIcon from "../../../Images/Investor/Sidebar/SavedPosts.svg";
import ExitIcon from "../../../Images/investorIcon/Exit.svg";
// import InvestorIcon from "../../../Images/investorIcon/Pot.svg";
// import PlusIcon from "../../../Images/investorIcon/Plus.svg";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogOutPopUp from "../../PopUp/LogOutPopUp/LogOutPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/features/user/userSlice";
import connectionsIcon from "../../../Images/investorsidebar/connection.svg";
import { PlusIcon } from "../SvgIcons";
import companyProfileIcon from "../../../Images/Investor/Sidebar/company.svg";
import { BsChevronDown, BsChevronUp, BsLink45Deg } from "react-icons/bs";
import { ModalBsLauncher } from "../../PopUp/ModalBS";
import CommunitiesIcon from "../../Investor/ChatComponents/CommunitiesIcon";

// Investor Sidebar
const SideBar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const isMobileView = useSelector((state) => state.design.isMobileView);
  const [isCommunityDetailOpen, setIsCommunityDetailOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // const menuIconClick = () => {
  //   setSidebarCollapsed(true);
  // };

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
      className={`container newInvestor_sidebar_container ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
      onMouseLeave={() => {
        if (!isMobileView) {
          setSidebarCollapsed(true);
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
      <div id="header">
        <ProSidebar collapsed={sidebarCollapsed}>
          <SidebarHeader>
            <div className="logotext">
              {sidebarCollapsed ? (
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to={"/investor/profile"}
                >
                  <img
                    className="rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
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
                    to={"/investor/profile"}
                  >
                    {" "}
                    <img
                      className="rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                      src={loggedInUser.profilePicture}
                      alt="User profile"
                    />
                  </Link>
                  <h3>
                    {loggedInUser?.firstName} {loggedInUser?.lastName}
                  </h3>
                  <h4>{loggedInUser?.email}</h4>
                </>
              )}
            </div>
            {/* <div className="closemenu" onClick={menuIconClick}>
              {sidebarCollapsed ? (
                <img className="closemenu-Right" src={ArrowRight} alt="image" />
              ) : (
                <img className="closemenu-Left" src={ArrowLeft} alt="image" />
              )}
            </div> */}
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round">
              <MenuItem
                // active={location.pathname.includes("/")}
                className=""
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/home?showPopup=true"
                  id="sidebar_createAPost"
                >
                  {sidebarCollapsed ? (
                    <>
                      <button className="plus_btn_newInvestor">
                        {/* <img src={PlusIcon} alt="image" /> */}
                        <PlusIcon color="black" width="24" height="24" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="create_post_newInvestor">
                        {/* <span>Create a Post</span>
                        <img src={PlusIcon} alt="image" /> */}
                        <span className="text-black ms-0">Create Post</span>
                        {/* <img src={PlusIcon} alt="image" /> */}
                        <PlusIcon color="black" width="24" height="24" />
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
                  to="/investor/home"
                  id="sidebar_home"
                >
                  <img src={HomeIcon} alt="link to Home" />
                  {!sidebarCollapsed && (
                    <span className="text-black">Home</span>
                  )}
                </Link>
              </MenuItem>

              <MenuItem
                active={location.pathname.includes("/company-profile")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/company-profile"
                  id="sidebar_companyProfile"
                >
                  <img src={companyProfileIcon} alt="link to Company Profile" />
                  {!sidebarCollapsed && (
                    <span className="text-black">Company</span>
                  )}
                </Link>
              </MenuItem>

              <MenuItem
                active={location.pathname.includes("/onelink")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/onelink"
                  id="sidebar_onelink"
                >
                  <BsLink45Deg height={"59px"} width={"59px"} size={"20px"} />
                  {!sidebarCollapsed && (
                    <span className="text-black">OneLink</span>
                  )}
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
                  <div onClick={() => setSidebarCollapsed(true)}>
                    <CommunitiesIcon
                      width="17px"
                      height="17px"
                      color={`${
                        isCommunityDetailOpen ? "#000" : "rgba(97, 97, 97, 1)"
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
                          className="sidebar__community__btn "
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
                active={location.pathname.includes("/explore")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/explore"
                  id="sidebar_explore"
                >
                  <img
                    src={exploreIcon}
                    alt="link for Explore"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && (
                    <span className="text-black">Explore</span>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/mystartups")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/mystartups"
                  id="sidebar_myStartups"
                >
                  <img
                    src={myStartUpIcon}
                    alt="link for My Startups"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && (
                    <span className="text-black">My StartUps</span>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/my-schedule")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/my-schedule"
                  id="sidebar_mySchedule"
                >
                  <img
                    src={mySchedulesIcon}
                    alt="link for My Schedules"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && (
                    <span className="text-black">My Schedules</span>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/saved-posts")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/saved-posts"
                  id="sidebar_savedPosts"
                >
                  <img
                    src={savedPostsIcon}
                    alt="link for Saved Posts"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && (
                    <span className="text-black">Saved Posts</span>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/connection")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/connection"
                  id="sidebar_connections"
                >
                  <img
                    src={connectionsIcon}
                    alt="link for Connections"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && (
                    <span className="text-black">Connection</span>
                  )}
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
                  <img src={HomeIcon} alt="link to main landing page" />
                  {!sidebarCollapsed && <span>Learn More</span>}
                </Link>
              </MenuItem>
              {/* <MenuItem
                active={location.pathname.includes("/syndicates")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/syndicates"
                >
                  <img
                    src={syndicateIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && (
                    <span className="text-black">Syndicates</span>
                  )}
                </Link>
              </MenuItem> */}

              {/* <MenuItem
                active={location.pathname.includes("/live-deals")}
                className="active-item"
              >
                <Link
                  // onClick={() => setSidebarCollapsed(true)}
                  to="/investor/live-deals"
                >
                  <img
                    src={liveDealsIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && (
                    <span className="text-black">Live Deals</span>
                  )}
                </Link>
              </MenuItem> */}

              {/* <MenuItem
                active={location.pathname.includes("/investors")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/investors">
                  <img
                    src={InvestorIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Investors</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/connection")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(true)}
                  to="/connection"
                >
                  <img
                    src={connectionsIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Connnections</span>}
                </Link>
              </MenuItem>

              <hr className="hr-above-support" />
              <MenuItem
                active={location.pathname.includes("/support")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/support">
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
                {!sidebarCollapsed && (
                  <span className="text-black">Log out</span>
                )}
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
          isInvestor={true}
        />
      )}
    </div>
  );
};

export default SideBar;
