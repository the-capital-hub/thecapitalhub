import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../../Service/user";
import ArrowLeft from "../../../Images/investorsidebar/ArrowLeft.svg";
import ArrowRight from "../../../Images/investorsidebar/ArrowRight.svg";
import IconProfile from "../SvgIcons/IconProfile";
import IconStartupsInvested from "../SvgIcons/IconStartupsInvested";
import IconInvestmentPhilosophy from "../SvgIcons/IconInvestmentPhil";
import IconAppointment from "../SvgIcons/IconAppointment";
import DefaultAvatar from "../../../Images/Chat/default-user-avatar.webp";

import "./InvestorOneLinkSidebar.scss";

export default function InvestorOneLinkSidebar({
  sidebarCollapsed,
  setSidebarCollapsed,
}) {
  // get params
  const { username } = useParams();
  const { userId } = useParams();

  // States
  const [user, setUser] = useState([]);
  const [currentTab, setCurrentTab] = useState("investorProfile");

  // useEffect(() => {
  //     getUserById(username, userId)
  //       .then(({ data }) => {
  //         setUser(data);
  //       })
  //       .catch(() => setUser([]));
  //   }, [username]);

  const menuIconClick = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="investor_oneLink_sidebar_container">
      <div
        className={`container sidebar_container investor_onelink_view_sidebar  ${
          sidebarCollapsed ? "collapsed" : ""
        }`}
      >
        <div id="header">
          <ProSidebar collapsed={sidebarCollapsed}>
            {/* Sidebar Header */}
            <SidebarHeader>
              <div className="logotext">
                <>
                  <img
                    src={user.profilePicture || DefaultAvatar}
                    alt="image"
                    className="rounded-circle"
                  />
                  <h3
                    className={`${sidebarCollapsed ? "invisible" : "visible"}`}
                  >
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <h4
                    className={`${sidebarCollapsed ? "invisible" : "visible"}`}
                  >
                    {user?.email}
                  </h4>
                </>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {sidebarCollapsed ? (
                  <img
                    className="closemenu-Right"
                    src={ArrowRight}
                    alt="image"
                  />
                ) : (
                  <img className="closemenu-Left" src={ArrowLeft} alt="image" />
                )}
              </div>
            </SidebarHeader>

            {/* Sidebar Content */}
            <SidebarContent>
              <Menu iconShape="round">
                {/* Investor Profile */}
                <MenuItem
                  active={currentTab === "investorProfile"}
                  className="active-item"
                  onClick={() => setCurrentTab("investorProfile")}
                >
                  <Link to="">
                    <IconProfile width="22px" height="22px" />
                    {!sidebarCollapsed && <span>Investor Profile</span>}
                  </Link>
                </MenuItem>

                {/* Startups Invested */}
                <MenuItem
                  active={currentTab === "startupsInvested"}
                  className="active-item"
                  onClick={() => setCurrentTab("startupsInvested")}
                >
                  <Link to="startups-invested">
                    <IconStartupsInvested width="30px" height="30px" />
                    {!sidebarCollapsed && <span>Startups Invested</span>}
                  </Link>
                </MenuItem>

                {/* Investment Philosophy */}
                <MenuItem
                  active={currentTab === "investment"}
                  className="active-item"
                  onClick={() => setCurrentTab("investment")}
                >
                  <Link to="investment-philosophy">
                    <IconInvestmentPhilosophy width="30px" height="30px" />
                    {!sidebarCollapsed && <span>Investment</span>}
                  </Link>
                </MenuItem>

                {/* Appointment */}
                <MenuItem
                  active={currentTab === "appointment"}
                  className="active-item"
                  onClick={() => setCurrentTab("appointment")}
                >
                  <Link to="appointment">
                    <IconAppointment width="25px" height="25px" />
                    {!sidebarCollapsed && <span>Appointment</span>}
                  </Link>
                </MenuItem>
              </Menu>
            </SidebarContent>
            {/* <SidebarFooter>
          </SidebarFooter> */}
          </ProSidebar>
        </div>
      </div>
    </div>
  );
}
