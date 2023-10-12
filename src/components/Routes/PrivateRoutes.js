import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import InvestorNavbar from "../Investor/InvestorNavbar/InvestorNavbar";
import InvestorSidebar from "../Investor/InvestorSidebar/InvestorSidebar";
import "./style.scss";
import LogOutPopUp from "../PopUp/LogOutPopUp/LogOutPopUp";
import { ModalBSContainer, ModalBSBody, ModalBSHeader } from "../PopUp/ModalBS";
import NewCommunityModal from "../Investor/ChatComponents/NewCommunityModal";
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...props }) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
    if (loggedInUser?.investor) {
      return <Navigate to="/investor/home" replace />;
    }
    return (
      <>
        <InvestorNavbar
          handleSidebarToggle={handleSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />

        <div
          className={`container-fluid investor_home_container ${sidebarCollapsed ? "sidebar-collapsed" : ""
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
