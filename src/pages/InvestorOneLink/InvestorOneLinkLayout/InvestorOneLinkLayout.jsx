import React, { useEffect, useState } from "react";
import { NavBar } from "../../../components/InvestorView";
import { Outlet, useLocation } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import "./InvestorOneLinkLayout.scss";
import InvestorOneLinkSidebar from "../../../components/InvestorOneLink/InvestorOneLinkSidebar/InvestorOneLinkSidebar";

export default function InvestorOneLinkLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="investor_onelink_layout_wrapper">
      {/* Top Navbar */}
      <NavBar handleSidebarToggle={handleSidebarToggle} />

      <div
        className={`container-fluid investor_view_container ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <div className="sidebar">
          <InvestorOneLinkSidebar
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={handleSidebarToggle}
          />
        </div>

        <div className="content">
          <MaxWidthWrapper>
            <Outlet />
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
}
