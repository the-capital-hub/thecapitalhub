import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import InvestorNavbar from "../Investor/InvestorNavbar/InvestorNavbar";
import InvestorSidebar from "../Investor/InvestorSidebar/InvestorSidebar";
import "./style.scss";
import LogOutPopUp from "../PopUp/LogOutPopUp/LogOutPopUp";
import { ModalBSContainer, ModalBSBody, ModalBSHeader } from "../PopUp/ModalBS";
import NewCommunityModal from "../Investor/ChatComponents/NewCommunityModal";

function PrivateRoute({ children, ...props }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const isLoggedIn = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn-->", isLoggedIn);
    return isLoggedIn === "true";
  };
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (isLoggedIn()) {
    return (
      <>
        <InvestorNavbar
          handleSidebarToggle={handleSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />

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

          <div className="modals">
            {/* Modal for creating new Community */}
            <ModalBSContainer
              isStatic={false}
              id="AddNewCommunity"
              className="z-n1"
            >
              <ModalBSHeader
                title={"Create a Community"}
                className={"orange__heading"}
              />
              <ModalBSBody>
                <NewCommunityModal />
              </ModalBSBody>
            </ModalBSContainer>
          </div>
        </div>
      </>
    );
  } else <Navigate to="/login" replace />;
}

export default PrivateRoute;
