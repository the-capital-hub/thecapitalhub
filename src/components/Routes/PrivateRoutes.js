import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import InvestorNavbar from "../Investor/InvestorNavbar/InvestorNavbar";
import InvestorSidebar from "../Investor/InvestorSidebar/InvestorSidebar";
import "./style.css";
import { SidebarContext } from "../Sidebar/SidebarContext";
import { SidebarProvider } from "../Sidebar/SidebarContext";

function PrivateRoute({ children, ...props }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="container-fluid investor_home_container">
      <SidebarProvider>
        <div
          className="sidebar"
          style={{ width: sidebarCollapsed ? "10%" : "20.5%" }}
        >
          <InvestorSidebar
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </div>
        <div className="content">
          <InvestorNavbar />

          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  );
}

export default PrivateRoute;
