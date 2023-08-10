import React from "react";
import "./contactus.scss";
import callIcon from "../../Images/Call.svg";
import messageIcon from "../../Images/Message.svg";
import mapPinIcon from "../../Images/map_pin.svg";
import fbIcon from '../../Images/fb_contact.svg'
import instaIcon from '../../Images/insta_contact.svg'
import twIcon from '../../Images/tw_contact.svg'
const ContactUs = () => {
  return (
    <>
      <div className="container-fluid contactus_container">
        <div className="title_section">
          <h2>Contact Us</h2>
          <span>Our experts will be happy to assist you with your queries</span>
        </div>
        <div className="container mt-5">
          <div class="card-container card-container_contact">
            <div class="card">
              <img src={callIcon} alt="callimg" />
              <div className="text_content">
                <h2>Customer Support</h2>
                <span style={{ color: "#FD5901", fontSize: "15px" }}>
                  +91 xxxxxxxxxx
                </span>
                <p>
                  You may call us between Monday to Friday 9:00 am to 5:30 pm
                  from your registered mobile number.
                </p>
              </div>
              <button>Call Us</button>
            </div>
            <div class="card">
              <img src={messageIcon} alt="callimg" />
              <div className="text_content">
                <h2>Email us</h2>
                <span
                  style={{
                    color: "#FD5901",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  capitalhub@gmail.com
                </span>
                <p>
                  Write to us about your query and our customer support team
                  will revert as soon as possible
                </p>
              </div>
              <button>Send Email</button>
            </div>
            <div class="card">
              <img src={mapPinIcon} alt="callimg" />
              <div className="text_content">
                <h2>Our address</h2>
                <p>
                  Capital Hub <br />
                  Benz circle, 5th Floor, <br /> Electronic city, <br />
                  karnataka, bangalore – 500 064
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="title_section mb-5">
          <h2>Follow us on</h2>
          <div className="followus_image_section">
            <img src={fbIcon} alt="img" />
            <img src={instaIcon} alt="img" />
            <img src={twIcon} alt="img" />

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
