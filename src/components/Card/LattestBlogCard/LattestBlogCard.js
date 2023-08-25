import React from 'react';
import './LattestBlogCard.scss'

const LattestBlogCard = ({image,button,title,date,onClick}) => {
  return (
    <div className="blog-card col-lg-4 col-md-6 col-sm-12" onClick={onClick}>
      <img
        className="blog-card-image"
        src={image}
        alt="Blog"
      />
      <button className="blog-card-button">{button}</button>
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-date">{date}</p>
    </div>
  );
}

export default LattestBlogCard;
