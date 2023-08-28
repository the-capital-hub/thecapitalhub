import React, { useEffect, useState } from "react";
import "./Blog.scss";
import ImageBlog1 from "../../Images/blog/Rectangle 1271.png";
import ImageBlog2 from "../../Images/blog/Rectangle 1273.png";
import SearchIcon from "../../Images/blog/Combined-Shape.svg";
import LattestBlogCard from "../Card/LattestBlogCard/LattestBlogCard";
import BlogoneImage from "../../Images/blog/1 AsPGU1Q42C9lsVRoMg91Nw.webp";
import BlogtwoImage from "../../Images/blog/eighttips.webp";
import BlogthreeImage from "../../Images/blog/BlogthreeImage.webp";
import {useNavigate } from "react-router-dom";

const Blog = () => {

  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };


  return (
    <>
      <div className="container-fluid blog_container">
        <div className="container search_blog_container">
          <div className="col-md-6">
            <h1 className="blog_title">Blog</h1>
          </div>
          {/* <div className="col-md-6 search_bar">
            <div className="search-input-container">
              <img src={SearchIcon} className="search-icon fas fa-search" />
              <input type="search" placeholder="Search" />
            </div>
          </div> */}
        </div>
        {/* <div className="row navbar_black">
          <ul className="navbar_list">
            <li> </li>
            <li className="active">All</li>
            <li>BestOffer</li>
            <li>Investments</li>
            <li>Web Development</li>
            <li>Fundrasing</li>
            <li>Pitch Deck</li>
            <li>Income Tax</li>
            <li>Investors</li>
            <li>></li>
          </ul>
        </div> */}
        {/* <div className="container main_blog_container">
          <section className="row main_blog_section">
            <div className="col-lg-5 col-md-12 image_section_left">
              <img src={ImageBlog1} alt="img" />
            </div>
            <div className="col-lg-7 col-md-12 right_content_section">
              <div className="button_and_text">
                <button>Web Development</button>
                <span>Published on Monday, August 21st, 2023</span>
              </div>
              <h1 className="title_text_blog">
                Web Development Improving Services
              </h1>
              <p className="para_blog">
                Capital HUB is the go-to source for startups when it comes to
                web development, and Android and iOS development services. We
                recognize that building a great startup begins with adapting to
                new technology and evolving as a startup with all new features.
              </p>
              <button className="read_full_button">Read full blog</button>
            </div>
          </section>
        </div>
        <hr /> */}
        <div className="container lattest_blog_container">
          <h1>Latest Blogs</h1>
          <section className="row justify-content-around">
            <LattestBlogCard
              image={BlogoneImage}
              button={"Startup"}
              date={"May 1 2023"}
              title={
                "Why Mentoring Matters: Why Angel Investors Should Prioritize Mentorship Before Investing in a Startup"
              }
              onClick={() => handleCardClick("/blog/startupOne")} 
            />

            <LattestBlogCard
              image={BlogtwoImage}
              button={"Startup"}
              date={"Jan 21 2023"}
              title={"8 Tips to start raising Angel investments for startups"}
              onClick={() => handleCardClick("/blog/startupTwo")}
            />

            <LattestBlogCard
              image={BlogthreeImage}
              button={"Startup"}
              date={"Jan 21 2023"}
              title={"HOW TO BUILD A GREAT STARTUP by Pramod Badiger"}
              onClick={() => handleCardClick("/blog/startupThree")}
            />

            <LattestBlogCard
              image={ImageBlog2}
              button={"Startup"}
              date={"May 1 2023"}
              title={
                "Why Mentoring Matters: Why Angel Investors Should Prioritize Mentorship Before Investing in a Startup"
              }
            />
            <LattestBlogCard
              image={ImageBlog1}
              button={"Startup"}
              date={"May 1 2023"}
              title={
                "Why Mentoring Matters: Why Angel Investors Should Prioritize Mentorship Before Investing in a Startup"
              }
            />
            <LattestBlogCard
              image={ImageBlog1}
              button={"Startup"}
              date={"May 1 2023"}
              title={
                "Why Mentoring Matters: Why Angel Investors Should Prioritize Mentorship Before Investing in a Startup"
              }
            />
          </section>
        </div>
        <div className="container pagination_container_section">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div className="subscribe_container_section">
          <h2>Get exclusive content and expert advice</h2>
          <div className="subscribe-input-container">
            <input
              type="search"
              className="subscribe-input"
              placeholder="Enter your email"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Blog;
