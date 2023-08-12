import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import NavBarIV from "../../../components/InvestorView/NavBar/NavBar";
import SideBarIV from "../../../components/InvestorView/SideBar/SideBar";

function ValidateOneLink() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { username: firstName } = useParams();
  useEffect(() => {
    console.log(firstName);
    // API call for checking if the start up is valid
  }, []);

  // if checking fails, show 404
  return (
    <>
      <NavBarIV />
      <div
        className={`container-fluid investor_view_container ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <div className="sidebar">
          <SideBarIV
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={() => setSidebarCollapsed(!sidebarCollapsed)}
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
