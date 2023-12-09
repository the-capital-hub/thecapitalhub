import React from "react";
import "./PostInvestmentCard.scss";
const PostInvestmentCard = ({ logo, text, para, images, smallText }) => {
  return (
    <div className="postinvestment-card-container">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="text">
          <strong>{text}</strong>
        </div>
      </div>
      <p className="para">{para}</p>

      <hr />
      <div className="bottom">
        <img src={images} alt="" className="small-image" />
        <span className="small-text">{smallText}</span>
      </div>
    </div>
  );
};

export default PostInvestmentCard;
