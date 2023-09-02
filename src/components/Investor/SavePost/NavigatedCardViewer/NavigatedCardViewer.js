// NavigatedCardViewer.js
import React, { useState } from "react";
import "./NavigatedCardViewer.scss";
import FeedPostCard from "../../Cards/FeedPost/FeedPostCard";
import { useEffect } from "react";
import { getSavedPostsAPI } from "../../../../Service/user";

const NavigatedCardViewer = () => {
  const [activeHeader, setActiveHeader] = useState("startup");
  const [allPosts, setAllPosts] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleHeaderClick = (header) => {
    setFilteredPosts(allPosts.filter(({ category }) => category === header));
    setActiveHeader(header);
  };

  useEffect(() => {
    getSavedPostsAPI()
      .then(({ data: { data } }) => {
        setAllPosts(data);
        setFilteredPosts(
          data.filter(({ category }) => category === activeHeader)
        );
      })
      .catch((error) => {
        console.log(error);
        setAllPosts([]);
      });
  }, []);

  return (
    <div className="navigated_box_container ">
      <div className="navigated-card-viewer">
        <div className="navigation-header border-bottom">
          <div
            className={`nav-item ${activeHeader === "startup" ? "active" : ""}`}
            onClick={() => handleHeaderClick("startup")}
          >
            Startup
          </div>
          <div
            className={`nav-item ${
              activeHeader === "investor" ? "active" : ""
            }`}
            onClick={() => handleHeaderClick("investor")}
          >
            Investor
          </div>
          <div
            className={`nav-item ${
              activeHeader === "learning" ? "active" : ""
            }`}
            onClick={() => handleHeaderClick("learning")}
          >
            Learning
          </div>
          <div
            className={`nav-item ${activeHeader === "fund" ? "active" : ""}`}
            onClick={() => handleHeaderClick("fund")}
          >
            Fund
          </div>
          <div
            className={`nav-item ${activeHeader === "other" ? "active" : ""}`}
            onClick={() => handleHeaderClick("other")}
          >
            Other
          </div>
        </div>
        <div className="row row-cols-1">
          {allPosts ? (
            filteredPosts.length ? (
              filteredPosts.map(
                (
                  {
                    description,
                    user: { firstName, lastName, profilePicture },
                    video,
                    image,
                    createdAt,
                  },
                  index
                ) => (
                  <FeedPostCard
                    key={index}
                    description={description}
                    profilePicture={profilePicture}
                    firstName={firstName}
                    lastName={lastName}
                    video={video}
                    image={image}
                    createdAt={createdAt}
                  />
                )
              )
            ) : (
              <p className="container p-5 text-center my-5 bg-white mx-auto ">
                {`No posts saved for ${activeHeader}`}
              </p>
            )
          ) : (
            <p className="container p-5 text-center my-5 bg-white mx-auto ">
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigatedCardViewer;
