import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import "./ProtectedInvestorRoutes.scss";
import LogOutPopUp from "../../../components/PopUp/LogOutPopUp/LogOutPopUp";
import InvestorNavbar from "../../../components/NewInvestor/NavBar/NavBar";
import InvestorSidebar from "../../../components/NewInvestor/SideBar/SideBar";

function ProtectedInvestorRoutes({ children, ...props }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  // const isLoggedIn = () => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   console.log("isLoggedIn-->", isLoggedIn);
  //   return isLoggedIn === "true";
  // };
  // if (!isLoggedIn()) {
  //   return <Navigate to="/login" replace />;
  // }

  // if (isLoggedIn()) {
  return (
    <>
      <InvestorNavbar
        handleSidebarToggle={handleSidebarToggle}
        sidebarCollapsed={sidebarCollapsed}
      />

      <div
        className={`container-fluid newInvestor_container ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
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
      <LogOutPopUp />
    </>
  );
  // } else <Navigate to="/login" replace />;
}

export default ProtectedInvestorRoutes;
