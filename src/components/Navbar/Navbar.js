import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../Images/Logo.svg";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import HambergerIcon from '../../Images/Hamberger.svg'

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolling(scrollTop > 0);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="container nav_container">
      <nav className={`nav ${isScrolling ? "scrolling-nav" : ""}`}>
        <div className="hamberger_logo_login_container">
          <div className="logo_hamberger">
            <div id="mobile" onClick={handleClick}>
              {clicked ? (
                <RxCross2 size={"2rem"} className="i" />
              ) : (
                <img src={HambergerIcon} alt="hamberger"/>
              )}
            </div>

            <Link to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div>
            <li>
              <Link
                to="/signup"
                className={"mobile_loginbtn"}
                onClick={() => setSelectedLink("login")}
              >
                Log in
              </Link>
            </li>
          </div>
        </div>

        <div className={`navbar-items ${clicked ? "active" : ""}`}>
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li>
              <Link
                to="/"
                className={selectedLink === "home" ? "active" : ""}
                onClick={() => setSelectedLink("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={selectedLink === "about" ? "active" : ""}
                onClick={() => setSelectedLink("about")}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className={selectedLink === "contactus" ? "active" : ""}
                onClick={() => setSelectedLink("contactus")}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className={"loginbtn"}
                onClick={() => setSelectedLink("login")}
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
