import React from "react";
import "./OneLink.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import ShareLink from "./ShareLink/ShareLink";
import IntroductoryMessage from "./IntroductoryMessage/IntroductoryMessage";
import OnePagePreview from "./OnePagePreview/OnePagePreview";
import ThreeDotsImage from "../../../Images/whiteTheeeDots.svg";
import FolderImage from "../../../Images/Folder.svg";
import VideoImage from "../../../Images/Video.svg";

const OneLink = () => {
  return (
    <div className="container-fluid onelink_container">
      <div className="row mt-2">
        <div className="col">
          <SmallProfileCard text={"One Link"} />
          <div className="content-70">
            <div className="row">
              <div className="col-12 mt-2">
                <ShareLink />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2">
                <IntroductoryMessage
                  title={"Introductory message"}
                  image={{
                    threeDots: ThreeDotsImage,
                    folder: FolderImage,
                    video: VideoImage,
                  }}
                  para={
                    "As the Founder at Capital HUB, Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.As the Founder at Capital HUB, Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture."
                  }
                  input={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="content-30">
            <div className="row">
              <RightProfileCard />
              <RecommendationCard />
              {/* <NewsCorner /> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-2">
            <OnePagePreview show={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneLink;
