import React, { useState } from "react";
import "./Connection.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import ProfileImage from "../../../Images/Pramod.jpeg";

const Connection = () => {
  const [selectedTab, setSelectedTab] = useState("received"); // Default to "received"

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const connectionItems = [
    {
      name: "John Doe",
      designation: "Designer",
      time: "2 days ago",
    },
  ];

  return (
    <div className="container-fluid connection_main_container">
      <SmallProfileCard text={"Connections"} />
      <section className="content_section">
        <div className="row">
          <div className="col-12 mt-2 box">
            <h4>Manage Connection</h4>
            <nav className="connection_nav">
              <a
                href="#"
                className={`connection_nav_link ${
                  selectedTab === "received" ? "active" : ""
                }`}
                onClick={() => handleTabChange("received")}
              >
                Received
              </a>
              <a
                href="#"
                className={`connection_nav_link ${
                  selectedTab === "sent" ? "active" : ""
                }`}
                onClick={() => handleTabChange("sent")}
              >
                Sent
              </a>
            </nav>
            <hr />
            <button className="all_button">All</button>
            <hr />
            <div className="connection_list">
              {selectedTab === "received" ? (
                connectionItems.map((item, index) => (
                  <div key={index} className="connection_item">
                    <div className="connection_left">
                      <img
                        src={ProfileImage}
                        alt="Connection"
                       
                      />
                      <div className="body_container">
                        <p className="connection_name">{item.name}</p>
                        <p className="connection_designation">
                          {item.designation}
                        </p>
                        <p className="connection_time">{item.time}</p>
                      </div>
                    </div>
                    <div className="connection_right">
                      <button className="ignore_button">Ignore</button>
                      <button className="accept_button">Accept</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="sent_placeholder">
                  {/* You can add any content you want for the "Sent" tab */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connection;
