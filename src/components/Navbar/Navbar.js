import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../Images/Logo.svg";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import HambergerIcon from "../../Images/Hamberger.svg";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [hideDropdown, setHideDropDown] = useState(false)

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

  const handleMouseOver = () =>{
    setHideDropDown(true)
  }
  return (
    <div className="container nav_container">
      <nav className={`nav ${isScrolling ? "scrolling-nav" : ""}`}>
        <div className="hamberger_logo_login_container">
          <div className="logo_hamberger">
            <div id="mobile" onClick={handleClick}>
              {clicked ? (
                <RxCross2 size={"2rem"} className="i" />
              ) : (
                <img src={HambergerIcon} alt="hamberger" />
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
            <li className="dropdown">
              <span className="dropdown-label">Our Service</span>
              {/* Start of sub-dropdown menu */}
              <ul className="dropdown-menu">
                <li className="dropdown">
                  <Link
                    to="/service"
                    className={selectedLink === "service" ? "active" : ""}
                    onClick={() => setSelectedLink("service")}
                    onMouseOver={handleMouseOver}
                  >
                    Service
                  </Link>
                 { (selectedLink === "service" || selectedLink === "fundraising" || selectedLink === "pitch-deck" || selectedLink === "financials-document" || selectedLink === "web-development" || selectedLink === "sturtup-consulting" || selectedLink === "complience") && <ul
                    className="dropdown-menu "
                    style={{ marginLeft: "160px" }}
                  >
                    <li>
                      <Link
                        to="/fundraising"
                        className={
                          selectedLink === "fundraising" ? "active" : ""
                        }
                        onClick={() => setSelectedLink("fundraising")}
                      >
                        Fundraising
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/financials-document"
                        className={
                          selectedLink === "financials-document" ? "active" : ""
                        }
                        onClick={() => setSelectedLink("financials-document")}
                      >
                        Financials Documentation
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/web-development"
                        className={
                          selectedLink === "web-development" ? "active" : ""
                        }
                        onClick={() => setSelectedLink("web-development")}
                      >
                        WebDevelopment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/pitch-deck"
                        className={
                          selectedLink === "pitch-deck" ? "active" : ""
                        }
                        onClick={() => setSelectedLink("pitch-deck")}
                      >
                        Pitch Deck
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/sturtup-consulting"
                        className={
                          selectedLink === "sturtup-consulting" ? "active" : ""
                        }
                        onClick={() => setSelectedLink("sturtup-consulting")}
                      >
                        Startup Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/complience"
                        className={
                          selectedLink === "complience" ? "active" : ""
                        }
                        onClick={() => setSelectedLink("complience")}
                      >
                        COMPLIANCES
                      </Link>
                    </li>
                  </ul>}
                </li>
                <li>
                  <Link
                    to="/our-investor"
                    className={selectedLink === "investor" ? "active" : ""}
                    onClick={() => setSelectedLink("investor")}
                  >
                    Investor
                  </Link>
                </li>
              </ul>
              {/* End of sub-dropdown menu */}
            </li>
            <li>
              <Link
                to="/blog"
                className={selectedLink === "blog" ? "active" : ""}
                onClick={() => setSelectedLink("blog")}
              >
                Blog
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
