// NavigatedCardViewer.js
import React, { useState } from "react";
import "./NavigatedCardViewer.scss";

import ThreeDot from "../../../../Images/VerticalBlackThreeDots.svg";
import StartUp from "../../../../Images/Startup.png";

const NavigatedCardViewer = () => {
  const [activeHeader, setActiveHeader] = useState("Startup");

  const handleHeaderClick = (header) => {
    setActiveHeader(header);
  };

  return (
    <div className="navigated_box_container ">
      <div className="navigated-card-viewer">
        <div className="navigation-header">
          <div
            className={`nav-item ${activeHeader === "Startup" ? "active" : ""}`}
            onClick={() => handleHeaderClick("Startup")}
          >
            Startup
          </div>
          <div
            className={`nav-item ${
              activeHeader === "Investor" ? "active" : ""
            }`}
            onClick={() => handleHeaderClick("Investor")}
          >
            Investor
          </div>
          <div
            className={`nav-item ${
              activeHeader === "Learning" ? "active" : ""
            }`}
            onClick={() => handleHeaderClick("Learning")}
          >
            Learning
          </div>
          <div
            className={`nav-item ${activeHeader === "Fund" ? "active" : ""}`}
            onClick={() => handleHeaderClick("Fund")}
          >
            Fund
          </div>
          <div
            className={`nav-item ${activeHeader === "Add" ? "active" : ""}`}
            onClick={() => handleHeaderClick("Add")}
          >
            Add
          </div>
        </div>
        <hr className="divider_hr" />
        <div className="card-viewer">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="card border rounded p-3 ">
              {/* Card Header */}
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex">
                  <img
                    src={StartUp}
                    alt="Card Image"
                    className="img-fluid mr-2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <span className="card_heading">
                      {activeHeader} Card {index + 1}
                    </span>
                    <span className="card_heading">
                      {activeHeader} Card {index + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    src={ThreeDot}
                    alt="Three Dot"
                    className="img-fluid"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              </div>
              <img
                src={StartUp}
                alt="Card Body Image"
                className="img-fluid mb-2"
              />
              <p>
                Some text in the card footer. You can replace this with your own
                content.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigatedCardViewer;
