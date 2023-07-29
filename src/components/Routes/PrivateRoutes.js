import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import InvestorNavbar from "../Investor/InvestorNavbar/InvestorNavbar";
import InvestorSidebar from "../Investor/InvestorSidebar/InvestorSidebar";
import "./style.scss";
import LogOutPopUp from "../PopUp/LogOutPopUp/LogOutPopUp";

function PrivateRoute({ children, ...props }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };
  return (
    <>
      <InvestorNavbar />

      <div
        className={`container-fluid investor_home_container ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <LogOutPopUp />

        <div className="sidebar">
          <InvestorSidebar
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

export default PrivateRoute;
