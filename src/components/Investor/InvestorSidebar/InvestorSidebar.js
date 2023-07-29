import React,{useContext, useState} from "react";
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
import Support from "../../../Images/investorsidebar/Support.svg";
import HomeIcon from "../../../Images/investorIcon/home.svg";
import BookIcon from "../../../Images/investorIcon/Book.svg";
import ExitIcon from "../../../Images/investorIcon/Exit.svg";
import GroupIcon from "../../../Images/investorIcon/Group.svg";
import InvestorIcon from "../../../Images/investorIcon/Pot.svg";
import SaveIcon from "../../../Images/investorIcon/Save.svg";
import PlusIcon from "../../../Images/investorIcon/Plus.svg";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import {BsLink45Deg} from 'react-icons/bs'
import "react-pro-sidebar/dist/css/styles.css";
import "./investorsidebar.scss";
import { Link, useLocation } from "react-router-dom";

const InvestorSidebar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const location = useLocation();
  const menuIconClick = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div
      className={`container sidebar_container ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <div id="header">
        <ProSidebar collapsed={sidebarCollapsed}>
          <SidebarHeader>
            <div className="logotext">
              {sidebarCollapsed ? (
                <img src={profilePic} alt="" />
              ) : (
                <>
                  <img src={profilePic} alt="" />
                  <h3>Pramod badiger</h3>
                  <h4>Pramodbadigar@gmail.com</h4>
                </>
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {sidebarCollapsed ? (
                <img className="closemenu-Right" src={ArrowRight} alt="" />
              ) : (
                <img className="closemenu-Left" src={ArrowLeft} alt="" />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round">
              <MenuItem
                // active={location.pathname.includes("/")}
                className=""
              >
                <Link to="/createpost">
                  {sidebarCollapsed ? (
                    <><button className="plus_btn"><img src={PlusIcon} alt="" /></button></>
                  ) : (
                    <>
                      <button className="create_post">
                        <span>Create Post</span>
                        <img src={PlusIcon} alt="" />
                      </button>
                    </>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/home")}
                className="active-item"
              >
                <Link to="/home">
                  <img src={HomeIcon} alt="" />
                  {!sidebarCollapsed && <span>Home</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/documentation")}
                className="active-item"
              >
                <Link to="/documentation">
                  <img src={BookIcon} alt="" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Documentation</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/savePost")}
                className="active-item"
              >
                <Link to="/savePost">
                  <img src={SaveIcon} alt="" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Saved posts</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/onelink")}
                className="active-item"
              >
                <Link to="/onelink">
                  {/* <img src={OnelinkIcon} alt="" width="17px" height="17px" /> */}
                  <BsLink45Deg height={"59px"} width={"59px"} size={"20px"}/>
                  {!sidebarCollapsed && <span>One link</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/team")}
                className="active-item"
              >
                <Link to="/team">
                  <img src={GroupIcon} alt="" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Team</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/customers")}
                className="active-item"
              >
                <Link to="/customers">
                  <img src={Setting} alt="" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Customers</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/investors")}
                className="active-item"
              >
                <Link to="/investors">
                  <img src={InvestorIcon} alt="" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Investors</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/help")}
                className="active-item"
              >
                <Link to="/help">
                  <img src={Setting} alt="" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Help</span>}
                </Link>
              </MenuItem>

              <hr className="hr-above-support" />
              <MenuItem
                active={location.pathname.includes("/support")}
                className="active-item"
              >
                <Link to="/support">
                  <img src={Support} alt="" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Support</span>}
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="round">
              <MenuItem onClick={handleLogout}>
                <img src={ExitIcon} alt="" width="17px" height="17px" />
                {!sidebarCollapsed && <span>Log out</span>}
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </div>
  );
};

export default InvestorSidebar;
