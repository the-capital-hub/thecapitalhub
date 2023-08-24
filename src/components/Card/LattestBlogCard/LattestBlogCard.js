import React from 'react';
import './LattestBlogCard.scss'

const LattestBlogCard = ({image,button}) => {
  return (
    <div className="blog-card">
      <img
        className="blog-card-image"
        src={image}
        alt="Blog"
      />
      <button className="blog-card-button">{button}</button>
      <h3 className="blog-card-title">Blog Title</h3>
      <p className="blog-card-date">August 24, 2023</p>
    </div>
  );
}

export default LattestBlogCard;
