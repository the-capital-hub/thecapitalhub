import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarIV from "../../../components/InvestorView/NavBar/NavBar";
import SideBarIV from "../../../components/InvestorView/SideBar/SideBar";
import "./ValidateOneLink.scss";

function ValidateOneLink({ children, ...props }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

    return (
      <>
        <NavBarIV handleSidebarToggle={handleSidebarToggle}/>

        <div
          className={`container-fluid investor_view_container ${
            sidebarCollapsed ? "sidebar-collapsed" : ""
          }`}
        >

          <div className="sidebar">
            <SideBarIV
              sidebarCollapsed={sidebarCollapsed}
              setSidebarCollapsed={handleSidebarToggle}
            />
          </div>

          <div className="content">
            <Outlet />
          </div>
        </div>
      </>
    );
}

export default ValidateOneLink;

