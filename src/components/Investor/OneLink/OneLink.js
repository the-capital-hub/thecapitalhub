import React from "react";
import "./OneLink.scss";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../Cards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../Cards/Recommendation/RecommendationCard";
import NewsCorner from "../Cards/NewsCorner/NewsCorner";
import ShareLink from "./ShareLink/ShareLink";
import IntroductoryMessage from "./IntroductoryMessage/IntroductoryMessage";
import OnePagePreview from "./OnePagePreview/OnePagePreview";


const OneLink = () => {
  return (
    <div className="container-fluid onelink_container">
      <div className="row mt-2">
        <div className="col">
          <SmallProfileCard text={"One Link"}/>
          <div className="content-70">
            <div className="row">
              <div className="col-12 mt-2">
               <ShareLink/>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2">
               <IntroductoryMessage/>
              </div>
            </div>

           

          </div>
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
        <div className="row">
              <div className="col-12 mt-2">
               <OnePagePreview/>
              </div>
            </div>
      </div>
    </div>
  );
};

export default OneLink;
