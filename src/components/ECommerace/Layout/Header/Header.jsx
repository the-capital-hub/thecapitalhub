import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import Logo from "../../../../Images/Logo.svg";

function Header() {
  const location = useLocation();
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact-us");
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="container">
      <nav>
        <div className="nav justify-content-center align-items-center">
          {/* <NavLink to="/"> */}
          <NavLink to={location.pathname}>
            <img src={Logo} alt="Logo" />
          </NavLink>
          {/* <NavLink to="/contactus " className='d-none d-md-flex'>Contact Us</NavLink> */}
          {/* <NavLink to="/about " className='d-none d-md-flex'>About Us</NavLink> */}
        </div>
      </nav>
      <Link to={`${location.pathname}`} onClick={scrollToContact}>
        <button className="btn login-btn px-3 py-md-1">Contact Us</button>
      </Link>
    </header>
  );
}

export default Header;
