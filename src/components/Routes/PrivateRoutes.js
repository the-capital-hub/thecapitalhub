import { Outlet, Navigate, useLocation, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InvestorNavbar from "../Investor/InvestorNavbar/InvestorNavbar";
import InvestorSidebar from "../Investor/InvestorSidebar/InvestorSidebar";
import "./style.scss";
import LogOutPopUp from "../PopUp/LogOutPopUp/LogOutPopUp";
import { ModalBSContainer, ModalBSBody, ModalBSHeader } from "../PopUp/ModalBS";
import NewCommunityModal from "../Investor/ChatComponents/NewCommunityModal";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineHome } from "react-icons/hi2";
import { BsLink45Deg } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { CiBellOn, CiSquarePlus } from "react-icons/ci";
import {
  toggleCreatePostModal, toggleNotificationModal,
} from "../../Store/features/design/designSlice";


function PrivateRoute({ children, ...props }) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleToggleCreatePostModal = () => {
    navigate("/home");
    dispatch(toggleCreatePostModal());
  };


  const handleToggleNotificationModal = () => {
    dispatch(toggleNotificationModal());
  };



  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const isLoggedIn = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn === "true";
  };

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (isLoggedIn()) {
    if (loggedInUser.isInvestor === "true") {
      return <Navigate to="/investor/home" replace />;
    }
    return (
      <>
        <InvestorNavbar
          handleSidebarToggle={handleSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />

        <div
          className={`container-fluid p-0 investor_home_container position-relative ${sidebarCollapsed ? "sidebar-collapsed" : ""
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

          <div className="mobile-bottom-toolbar container p-2 shadow d-flex gap-1 justify-content-center border-top  px-3 d-md-none">
            <div className="d-flex flex-column align-items-center mx-3">
              <NavLink to="/home">
                <HiOutlineHome size={"22px"} />
              </NavLink>
              <span style={{ fontSize: "10px" }}>Home</span>
            </div>
            <div className="d-flex flex-column align-items-center mx-3">
              <NavLink to="/connection">
                <FiUsers size={"22px"} />
              </NavLink>
              <span style={{ fontSize: "10px" }}>Connection</span>
            </div>


            <div className="d-flex flex-column align-items-center mx-3" onClick={handleToggleCreatePostModal}>
              <CiSquarePlus size={"25px"} />
              <span style={{ fontSize: "10px" }}>Post</span>
            </div>

            <div className="d-flex flex-column align-items-center mx-3">
              <NavLink to="/onelink/edit">
                <BsLink45Deg size={"25px"} />
              </NavLink>
              <span style={{ fontSize: "10px" }}>OneLink</span>
            </div>

            <div className="d-flex flex-column align-items-center mx-3" onClick={handleToggleNotificationModal}>
              <CiBellOn size={"25px"} />
              <span style={{ fontSize: "10px" }}>Notification</span>
            </div>

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
