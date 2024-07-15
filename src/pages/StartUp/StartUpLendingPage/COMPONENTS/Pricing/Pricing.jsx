import React from "react";
import { TiTick } from "react-icons/ti";
import { MdCurrencyRupee } from "react-icons/md";
import bg from "../images/Polygon 12.png";
import dot from "../images/Ellipse 9.png";
import blurdot from "../images/Ellipse 12.png";
import small from "../images/Ellipse 20.png";
import "./pricing.scss";
import { subscription } from "./data";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate()
  return (
    <div className="pricing-container">
      <div className="heading">
        <h1>Simple and Affordable</h1>
        <h1>Pricing Plans</h1>
      </div>

      <img src={dot} alt="dot1" className="background-img dot1" />
      <img src={small} alt="small" className="background-img small" />
      <img src={dot} alt="dot2" className="background-img dot2" />
      <img src={blurdot} alt="blur-dot1" className="background-img blur-dot1" />
      <img src={blurdot} alt="blur-dot2" className="background-img blur-dot2" />
      <img src={blurdot} alt="blur-dot3" className="background-img blur-dot3" />
      <img src={bg} alt="background" className="background-img bg" />

      <div className="sub-plans">
        {subscription.map((item, index) => (
          <div className="plan basic" key={index}>
          <div>
            <h1 className="plan-title">{item.subscriptionType}</h1>
            <div className="price">
              <MdCurrencyRupee className="currency-icon" />
              <h1>
                {item.price}
                <span className="price-unit">/year </span>
              </h1>
            </div>
            <p className="sub-description">{item.description}</p>
            <div className="features">
              <hr />
              <h1>Features</h1>
              <hr />
            </div>
            <div className="feature-list">
              {item.features.map((i, j) => (
                <div className="feature-item" key={j}>
                  <div className="icon">
                    <TiTick />
                  </div>
                  <p style={{width:"100%",textAlign:"left"}}>{i}</p>
                </div>
              ))}
            </div>
            </div>
            <button className="purchase-button" onClick={()=>{navigate("/signup")}}>Join for Free!</button>
          </div>
        ))}
      </div>

      <button className="join-button" onClick={()=>{navigate("/signup")}}>
        GET ACCESS TO OUR PREMIUM FEATURES NOW!
      </button>
    </div>
  );
};

export default Pricing;
