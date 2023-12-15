import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  // SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
// import ArrowLeft from "../../../Images/investorsidebar/ArrowLeft.svg";
// import ArrowRight from "../../../Images/investorsidebar/ArrowRight.svg";
// import BookIcon from "../../../Images/investorIcon/Book.svg";
// import profilePic from "../../../Images/investorIcon/profilePic.webp";
import "react-pro-sidebar/dist/css/styles.css";
import "../../Investor/InvestorSidebar/investorsidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SideBar.scss";
// import profileIcon from "../../../Images/profile.png";
// import companyIcon from "../../../Images/company.png";
// import documentationIcon from "../../../Images/documentation.png";
// import investIcon from "../../../Images/invest.png";
import { getUserById } from "../../../Service/user";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import IconUser from "../../Investor/SvgIcons/IconUser";
import IconFile from "../../Investor/SvgIcons/IconFile";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const SideBar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const isMobileView = useSelector((state) => state.design.isMobileView);
  // const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const location = useLocation();

  // console.log("onelink pathname", location.pathname.split("/").slice(-1)[0]);

  const { username } = useParams();
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [currentTab, setCurrentTab] = useState(
    location.pathname.split("/").slice(-1)[0] === userId
      ? "company"
      : location.pathname.includes("documentation")
      ? "documentation"
      : location.pathname.split("/").slice(-1)[0]
  );

  // States for touch events
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    getUserById(username, userId)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => setUser([]));
  }, [username, userId]);

  // const menuIconClick = () => {
  //   setSidebarCollapsed(!sidebarCollapsed);
  // };

  // Methods for touch events
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
      className={`container sidebar_container investor_view_sidebar ${
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
                <img src={user.profilePicture} alt="user profile" />
              ) : (
                <>
                  <img src={user.profilePicture} alt="user profile" />
                  <h3 className="fs-6 mt-2">
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <h4 className="" style={{ fontSize: "12px" }}>
                    {user?.email}
                  </h4>
                </>
              )}
            </div>
            {/* <div className="closemenu" onClick={menuIconClick}>
              {sidebarCollapsed ? (
                <img
                  className="closemenu-Right"
                  src={ArrowRight}
                  alt="open sidebar"
                />
              ) : (
                <img
                  className="closemenu-Left"
                  src={ArrowLeft}
                  alt="close sidebar"
                />
              )}
            </div> */}
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round">
              <MenuItem
                active={currentTab === "company"}
                className="active-item"
                onClick={() => setCurrentTab("company")}
              >
                <Link to="">
                  {/* <img src={OnelinkIcon} alt="image" width="17px" height="17px" /> */}
                  {/* <img
                    src={companyIcon}
                    alt="Company"
                    width="17px"
                    height="17px"
                  /> */}
                  <HiOutlineOfficeBuilding size={25} />
                  {!sidebarCollapsed && (
                    <span
                      className={currentTab === "company" ? "items-active" : ""}
                    >
                      Company
                    </span>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={currentTab === "profile"}
                className="active-item"
                onClick={() => setCurrentTab("profile")}
              >
                <Link to="profile">
                  {/* <img
                    src={profileIcon}
                    alt="Profile"
                    width="17px"
                    height="17px"
                  /> */}
                  <IconUser height={25} width={25} />
                  {!sidebarCollapsed && (
                    <span
                      className={currentTab === "profile" ? "items-active" : ""}
                    >
                      Profile
                    </span>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={currentTab === "onepager"}
                className="active-item"
                onClick={() => setCurrentTab("onepager")}
              >
                <Link to="onepager">
                  {/* <img
                    src={BookIcon}
                    alt="OnePager"
                    width="17px"
                    height="17px"
                  /> */}
                  <IconFile width={25} height={25} />
                  {!sidebarCollapsed && (
                    <span
                      className={
                        currentTab === "onepager" ? "items-active" : ""
                      }
                    >
                      One Pager
                    </span>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={currentTab === "documentation"}
                className="active-item"
                onClick={() => setCurrentTab("documentation")}
              >
                <Link to="documentation">
                  {/* <img
                    src={documentationIcon}
                    alt="Documentation"
                    width="17px"
                    height="17px"
                  /> */}
                  <IoDocumentsOutline size={25} />
                  {!sidebarCollapsed && (
                    <span
                      className={
                        currentTab === "documentation" ? "items-active" : ""
                      }
                    >
                      Documentation
                    </span>
                  )}
                </Link>
              </MenuItem>

              {/* Invest now */}
              <div className="pt-2">
                <MenuItem
                  active={currentTab === "investnow"}
                  onClick={() => setCurrentTab("investnow")}
                  className="active-item invest_now"
                >
                  <Link to="investnow">
                    {/* <img
                      src={investIcon}
                      alt="Invest Now"
                      width="17px"
                      height="17px"
                    /> */}
                    <RiMoneyDollarCircleLine size={25} />
                    {!sidebarCollapsed && (
                      <span className={"items-active"}>Invest Now</span>
                    )}
                  </Link>
                </MenuItem>
              </div>
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="round">
              <MenuItem
                active={currentTab === "investNow"}
                onClick={() => setCurrentTab("investNow")}
                className="active-item invest_now"
              >
                <Link to="investnow">
                  <img
                    src={investIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Invest Now</span>}
                </Link>
              </MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </div>
  );
};

export default SideBar;
