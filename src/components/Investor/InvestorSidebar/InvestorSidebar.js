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
import { IoSettingsOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { PiSparkleLight, PiFloppyDiskBackLight } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoExitOutline } from "react-icons/io5";
import PlusIcon from "../../../Images/investorIcon/Plus.svg";
import { BsLink45Deg, BsChevronDown, BsChevronUp } from "react-icons/bs";
import "react-pro-sidebar/dist/css/styles.css";
import "./investorsidebar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogOutPopUp from "../../PopUp/LogOutPopUp/LogOutPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/features/user/userSlice";
import CommunitiesIcon from "../ChatComponents/CommunitiesIcon";
import ModalBsLauncher from "../../PopUp/ModalBS/ModalBsLauncher/ModalBsLauncher";
import { IoCompassOutline } from "react-icons/io5";
import { HiOutlineDocumentText, HiOutlineUserPlus } from "react-icons/hi2";
import { clearAllChatsData } from "../../../Store/features/chat/chatSlice";
import { FiHelpCircle } from "react-icons/fi";

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
    dispatch(clearAllChatsData);
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
                  <h3 className="" style={{ color: "var(--d-l-grey)" }}>
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
                  <GoHome size={25} />
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
                  <HiOutlineOfficeBuilding size={25} />
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
                  <IoCompassOutline size={25} />
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
                  <BsLink45Deg size={25} />
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
                      width="20px"
                      height="20px"
                      color={`${
                        isCommunityDetailOpen ? "#fd5901" : "var(--d-l-grey)"
                      }`}
                      className="me-1"
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
                  <HiOutlineDocumentText size={25} />

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
                  <PiFloppyDiskBackLight size={25} />
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
                  <HiOutlineUserPlus size={25} />
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
                  {/* <img src={Setting} alt="help" width="17px" height="17px" /> */}
                  <FiHelpCircle size={25} />
                  {!sidebarCollapsed && <span>Help</span>}
                </Link>
              </MenuItem>

              <MenuItem
                active={location.pathname.includes("/settings")}
                className="active-item"
              >
                <Link
                  //  onClick={() => setSidebarCollapsed(true)}
                  to="/settings"
                >
                  {/* <img src={Setting} alt="help" width="17px" height="17px" /> */}
                  <IoSettingsOutline size={25} />
                  {!sidebarCollapsed && <span>Settings</span>}
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
                  <PiSparkleLight size={25} />
                  {!sidebarCollapsed && <span>Learn More</span>}
                </Link>
              </MenuItem>
              {/* <hr className="hr-above-support" /> */}
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
                <div className="d-flex justify-content-center align-items-center">
                  <IoExitOutline size={25} />
                  {!sidebarCollapsed && <span>Log out</span>}
                </div>
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
