import React from "react";
import "./footer.scss";
import FbIcon from "../../Images/Fb.svg";
import TwIcon from "../../Images/Tw.svg";
import InIcon from "../../Images/In.svg";
import YtIcon from "../../Images/Yt.svg";
import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  return (
    <div className={`container-fluid footer_container ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-center ">
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
              vulputate eu vitae tristique.raju
            </p>
          </div> */}

          {/* General */}
          {/* <div className="col-md-2 col-sm-6 footer_list_item">
            <h4>General</h4>
            <ul className="list-unstyled">
              <li>
                <a href="http://thecapitalhub.in/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="http://thecapitalhub.in/contactus"
                  className="text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Courses
                </a>
              </li>
            </ul>
          </div> */}

          {/* Policies */}
          {/* <div className="col-md-2 col-sm-6 footer_list_item">
            <h4>Policies</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/security-safeguard" className="text-white">
                  Security safeguards
                </Link>
              </li>
              <li>
                <Link to="/term-of-service" className="text-white">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white">
                  Privacy
                </Link>
              </li>

              <li>
                <a href="#" className="text-white">
                  Accessibility
                </a>
              </li>
            </ul>
          </div> */}

          {/* Social links */}
          <div className="col-md-6 col-sm-6 text-center footer_list_item">
            <h4>Get in touch</h4>
            <p>
              Follow us on social media and stay updated with the latest
              information about our services
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.facebook.com/p/Capital-HUB-100086708877527/">
                <img src={FbIcon} alt="img" style={{ margin: "0px 2px" }} />
              </a>
              <a href="https://twitter.com/TheCapitalHub_">
                <img src={TwIcon} alt="img" style={{ margin: "0px 2px" }} />
              </a>
              <a href="https://instagram.com/capitalhub_official?igshid=MzRlODBiNWFlZA==">
                <img src={InIcon} alt="img" style={{ margin: "0px 2px" }} />
              </a>
              <a href="https://www.youtube.com/@huboriginals4179/featured">
                <img src={YtIcon} alt="img" style={{ margin: "0px 2px" }} />
              </a>
            </div>
          </div>

          {/* News letter */}
          {/* <div className="col-md-3 col-sm-6 footer_list_item">
            <h4>Subscribe to our Newsletter</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Velit enim est urna est
              massa cras. Sed varius convallis netus aliquet duis ut.
            </p>
            <div className="input-group mb-3 subscribe_input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
              />
              <div className="input-group-append">
                <button className="subscribe_btn" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="row ">
            <div className="col copyright_text">
            <h5>2022 - &copy;Lorem all right deserved</h5>

            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
