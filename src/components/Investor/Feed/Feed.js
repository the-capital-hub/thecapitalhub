import React, { useContext, useEffect, useState } from "react";
import "./feed.scss";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../Cards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../Cards/Recommendation/RecommendationCard";
import NewsCorner from "../Cards/NewsCorner/NewsCorner";
import FeedPostCard from "../Cards/FeedPost/FeedPostCard";
import CreatePostPopUp from "../../PopUp/CreatePostPopUp/CreatePostPopUp";

const Feed = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(!popupOpen);
  };
  return (
    <>
      <div className="container-fluid feed_container">
        <div className="row mt-2">
          <div className="col">
            <SmallProfileCard text={"Home"} />
            <div className="content-70">
              <div className="row">
                <div className="col-12 mt-2">
                  <div className="box start_post_container">
                    <img src={profilePic} alt="Image" />
                    <input
                      type="text"
                      placeholder="Enter text"
                      onClick={openPopup}
                    />
                  </div>
                </div>
              </div>
              <FeedPostCard />
              <FeedPostCard />
              <FeedPostCard />
            </div>
            {popupOpen && (
              <CreatePostPopUp setPopupOpen={setPopupOpen} popupOpen />
            )}
          </div>
          <div className="col">
            <div className="content-30">
              <div className="row">
                <RightProfileCard />
                <RecommendationCard />
                <NewsCorner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
