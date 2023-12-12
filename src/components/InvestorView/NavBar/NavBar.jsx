// import "./NavBar.scss";
// import Logo from "../../../Images/investorIcon/Logo.svg";
// import NotificationIcon from "../../../Images/investorIcon/notification.svg";
// import MessageIcon from "../../../Images/investorIcon/Message.svg";
// import profilePic from "../../../Images/investorIcon/profilePic.webp";
// import searchIcon from "../../../Images/investorIcon/searchIcon.svg";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <>
//       <div className="container pt-1">
//         <div className="row investor_view_navbar ">
//           <div className="col-md-5 d-flex">
//             <div className="row bar_logo_container ">
//               <div className="logo_container">
//                 <img src={Logo} alt="bar" />
//               </div>
//             </div>
//           </div>
//           <div className="col-md-7 navbar_right_container">
//             <div className="searchbar-container">
//               <input
//                 type="text"
//                 className="searchbar-input"
//                 placeholder="Search"
//               />
//               <button className="searchbar-button">
//                 <img src={searchIcon} alt="search" />
//               </button>
//             </div>
//             <div className="icons-container">
//               <div className="icon-wrapper">
//                 <span className="notification-icon">
//                   <img src={NotificationIcon} alt="notification" />
//                 </span>
//               </div>
//               <div className="icon-wrapper">
//                 <span className="message-icon">
//                   <img src={MessageIcon} alt="message" />
//                 </span>
//               </div>
//               <div className="icon-wrapper">
//                 <Link to={"/manage-account"}>
//                   {" "}
//                   <img className="profile-pic" src={profilePic} alt="Profile" />
//                 </Link>
//                 {/* <span className="me">Me</span> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NavBar;

import React from "react";
import "./NavBar.scss";
import Logo from "../../../Images/investorIcon/new-logo.png";
import HambergerIcon from "../../../Images/Hamberger.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsInvestor } from "../../../Store/features/user/userSlice";
import { selectTheme } from "../../../Store/features/design/designSlice";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";

const NavBar = ({ handleSidebarToggle, sidebarCollapsed }) => {
  const navigate = useNavigate();
  const isInvestor = useSelector(selectIsInvestor);
  const theme = useSelector(selectTheme);

  return (
    <>
      <div className="container" data-bs-theme={theme}>
        <div className="investor_view_navbar ">
          <div className="d-flex align-items-center h-100 ms-4">
            <div className="row bar_logo_container ">
              <div className="logo_container">
                <img src={Logo} alt="bar" />
              </div>
              <div
                className="mobile-home-hamberger"
                onClick={handleSidebarToggle}
              >
                {sidebarCollapsed ? (
                  <MdOutlineMenu size={25} />
                ) : (
                  <MdOutlineMenuOpen
                    size={25}
                    color="var(--darkMode-currentTheme)"
                  />
                )}
                {/* <img src={HambergerIcon} alt="bar" /> */}
                {/* <h1>Home</h1> */}
              </div>
            </div>
            <div
              className="ms-auto m-2 px-2 close-button"
              onClick={() =>
                navigate(isInvestor === "true" ? "/investor/home" : "/home")
              }
            >
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
