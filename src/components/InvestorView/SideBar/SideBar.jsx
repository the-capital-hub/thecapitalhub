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
import BookIcon from "../../../Images/investorIcon/Book.svg";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import "react-pro-sidebar/dist/css/styles.css";
import "../../Investor/InvestorSidebar/investorsidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SideBar.scss";
import profileIcon from "../../../Images/profile.png";
import companyIcon from "../../../Images/company.png";
import documentationIcon from "../../../Images/documentation.png";
import investIcon from "../../../Images/invest.png";
import { getUserById } from "../../../Service/user";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SideBar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const location = useLocation();
  const menuIconClick = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  const { username } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserById(username)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => setUser([]));
  }, [username]);

  return (
    <div
      className={`container sidebar_container investor_view_sidebar ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <div id="header">
        <ProSidebar collapsed={sidebarCollapsed}>
          <SidebarHeader>
            <div className="logotext">
              {sidebarCollapsed ? (
                <img src={user.profilePicture} alt="image" />
              ) : (
                <>
                  <img src={user.profilePicture} alt="image" />
                  <h3>
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <h4>{user?.email}</h4>
                </>
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {sidebarCollapsed ? (
                <img className="closemenu-Right" src={ArrowRight} alt="image" />
              ) : (
                <img className="closemenu-Left" src={ArrowLeft} alt="image" />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round">
              <MenuItem
                active={location.pathname.slice(-8).includes("/profile")}
                className="active-item"
              >
                <Link to="">
                  <img
                    src={profileIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Profile</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/company")}
                className="active-item"
              >
                <Link to="company">
                  {/* <img src={OnelinkIcon} alt="image" width="17px" height="17px" /> */}
                  <img
                    src={companyIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Company</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/onepager")}
                className="active-item"
              >
                <Link to="onepager">
                  <img src={BookIcon} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>One Pager</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/documentation")}
                className="active-item"
              >
                <Link to="documentation">
                  <img
                    src={documentationIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Documentation</span>}
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="round">
              <MenuItem
                active={location.pathname.includes("/investnow")}
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
          </SidebarFooter>
        </ProSidebar>
      </div>
    </div>
  );
};

export default SideBar;
