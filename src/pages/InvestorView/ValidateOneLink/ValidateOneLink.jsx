import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarIV from "../../../components/InvestorView/NavBar/NavBar";
import SideBarIV from "../../../components/InvestorView/SideBar/SideBar";
import "./ValidateOneLink.scss";
import OneLinkValidation from "../../../components/Shared/OnelinkValidation/OnelinkValidation";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ValidateOneLink({ children, ...props }) {
  const { userId } = useParams();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const oneLinkUser = useSelector((state) => state.onelink?.oneLinkUser);
  const oneLinkLoggedIn = useSelector(
    (state) => state.onelink?.oneLinkLoggedIn
  );
  const oneLinkId = useSelector((state) => state.onelink?.oneLinkId);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!oneLinkUser || !oneLinkLoggedIn || userId !== oneLinkId ? (
        <OneLinkValidation userId={userId} />
      ) : (
        <>
          <NavBarIV handleSidebarToggle={handleSidebarToggle} />

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
      )}
    </>
  );
}

export default ValidateOneLink;
