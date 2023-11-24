import { BsGraphUpArrow, BsLink45Deg } from "react-icons/bs";
import { CiBellOn, CiSquarePlus } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  toggleCreatePostModal,
  toggleNotificationModal,
  toggleinvestorCreatePostModal,
} from "../../../Store/features/design/designSlice";
import "./MobileNavbar.scss";
import { selectUnreadNotifications } from "../../../Store/features/user/userSlice";

export default function MobileNavbar({ isInvestor }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const unreadNotifications = useSelector(selectUnreadNotifications);

  const handleToggleCreatePostModal = () => {
    navigate(isInvestor ? "/investor/home" : "/home");
    dispatch(
      isInvestor ? toggleinvestorCreatePostModal() : toggleCreatePostModal()
    );
  };

  // Handle toggle notification
  const handleToggleNotificationModal = () => {
    dispatch(toggleNotificationModal());
  };

  return (
    <div className="mobile-bottom-toolbar container p-2 shadow d-flex gap-1 justify-content-center border-top  px-3 d-md-none">
      <div className="d-flex flex-column align-items-center mx-3">
        <NavLink to="/investor/home">
          <HiOutlineHome size={"22px"} />
        </NavLink>
        <span style={{ fontSize: "10px" }}>Home</span>
      </div>
      <div className="d-flex flex-column align-items-center mx-3">
        <NavLink to="/investor/connection">
          <FiUsers size={"22px"} />
        </NavLink>
        <span style={{ fontSize: "10px" }}>Connections</span>
      </div>

      <div
        className="d-flex flex-column align-items-center mx-3"
        onClick={handleToggleCreatePostModal}
      >
        <CiSquarePlus size={"25px"} />
        <span style={{ fontSize: "10px" }}>Post</span>
      </div>

      <div className="d-flex flex-column align-items-center mx-3">
        {isInvestor ? (
          <>
            <NavLink to="/investor/mystartups">
              <BsGraphUpArrow size={"20px"} />
            </NavLink>
            <span style={{ fontSize: "10px" }} className="text-center">
              {"My Startups"}
            </span>
          </>
        ) : (
          <>
            <NavLink to="/onelink/edit">
              <BsLink45Deg size={"25px"} />
            </NavLink>
            <span style={{ fontSize: "10px" }}>{"OneLink"}</span>
          </>
        )}
      </div>

      <div
        className="d-flex flex-column align-items-center mx-3 position-relative"
        onClick={handleToggleNotificationModal}
      >
        <CiBellOn size={"25px"} />
        <span style={{ fontSize: "10px" }}>Notification</span>
        {unreadNotifications > 0 && (
          <span
            class="position-absolute translate-middle rounded-circle text-white d-flex justify-content-center align-items-center"
            style={{
              width: "22px",
              height: "22px",
              backgroundColor: "red",
              top: "0px",
              right: "-10px",
              fontSize: "16px",
            }}
          >
            {unreadNotifications}
          </span>
        )}
      </div>
    </div>
  );
}
