import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProtectedInvestorRoutes.scss";
import LogOutPopUp from "../../../components/PopUp/LogOutPopUp/LogOutPopUp";
import InvestorNavbar from "../../../components/NewInvestor/NavBar/NavBar";
import InvestorSidebar from "../../../components/NewInvestor/SideBar/SideBar";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../components/PopUp/ModalBS";
import NewCommunityModal from "../../../components/Investor/ChatComponents/NewCommunityModal";
import { useSelector } from "react-redux";
// import {
//   toggleNotificationModal,
//   toggleinvestorCreatePostModal,
// } from "../../../Store/features/design/designSlice";
import MobileNavbar from "../../../components/Shared/MobileNavbar/MobileNavbar";

function ProtectedInvestorRoutes({ children, ...props }) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  const isLoggedIn = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn === "true";
  };
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (isLoggedIn()) {
    if (loggedInUser.isInvestor === "false") {
      return <Navigate to="/home" replace />;
    }

    // const handleToggleCreatePostModal = () => {
    //   navigate("/investor/home");
    //   dispatch(toggleinvestorCreatePostModal());
    // };

    // // Handle toggle notification
    // const handleToggleNotificationModal = () => {
    //   dispatch(toggleNotificationModal());
    // };
    return (
      <>
        <InvestorNavbar
          handleSidebarToggle={handleSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />

        <div
          className={`container-fluid p-0 newInvestor_container ${
            sidebarCollapsed ? "sidebar-collapsed" : ""
          }`}
        >
          <div className="sidebar">
            <InvestorSidebar
              sidebarCollapsed={sidebarCollapsed}
              setSidebarCollapsed={handleSidebarToggle}
            />
          </div>

          <div className="content pb-5 pb-md-0">
            <Outlet />
          </div>
        </div>

        {/* Mobile Navbar */}
        <MobileNavbar isInvestor={true} />

        <LogOutPopUp />

        <div className="modals">
          {/* Modal for creating new Community */}
          <ModalBSContainer
            isStatic={false}
            id="AddNewCommunity"
            className="z-n1"
          >
            <ModalBSHeader title={"Create a Community"} className={``} />
            <ModalBSBody>
              <NewCommunityModal theme="investor" />
            </ModalBSBody>
          </ModalBSContainer>
        </div>
      </>
    );
  } else <Navigate to="/login" replace />;
}

export default ProtectedInvestorRoutes;
