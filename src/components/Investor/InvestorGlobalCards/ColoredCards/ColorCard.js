import React from 'react';
import './ColorCard.scss';

const ColorCard = ({ color, text, image,amount,background }) => {
  return (
    <div className="colorcard-component card row width_hundred"style={{ background }}>
      <div className="col-7 col-sm-6 left-content" style={{ color }}>
        <h3 className="title">{text}</h3>
        <span className="rupee-sign">₹ {amount}</span>
      </div>
      <div className="col-5 right-content">
        <img src={image} alt="Card" />
      </div>
    </div>
  );
}

export default ColorCard;
