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
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getStartupByFounderId } from "../../../Service/user";
import SharingOneLinkPopUp from "../../PopUp/SharingOneLinkPopUp/SharingOneLinkPopUp";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";

const OneLink = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log(loggedInUser);
  const userId = loggedInUser._id;
  const [isExitClicked, setIsExitClicked] = useState(false);
  const [company, setCompany] = useState([]);
  // Fetch data by userId
  useEffect(() => {
    document.title = "One Link | The Capital Hub";
    getStartupByFounderId(userId)
      .then(({ data }) => {
        setCompany(data);
      })
      .catch(() => setCompany([]));
  }, [userId]);

  // HandleExitClick
  const handleExitClick = () => {
    console.log("Clilc");
    setIsExitClicked(true);
  };

  const handleClosePopup = () => {
    setIsExitClicked(false);
    // navigate("/login");
  };

  return (
    <MaxWidthWrapper>
      <div className="onelink_container">
        <div className="onelink_intro_container mt-sm-4 mt-md-2 mt-xxl-2">
          <div className="main__content">
            <SmallProfileCard text={"One Link"} />
            <ShareLink
              OneLink={company?.oneLink}
              onExitClick={handleExitClick}
            />
            <IntroductoryMessage
              title={"Introductory message"}
              image={{
                threeDots: ThreeDotsImage,
                folder: FolderImage,
                video: VideoImage,
              }}
              para={company.introductoryMessage}
              input={true}
              isExitClicked={isExitClicked}
              setCompany={setCompany}
            />
          </div>
          <div className="right__content">
            <RightProfileCard />
            <RecommendationCard />
            {/* <NewsCorner /> */}
          </div>
        </div>
        <OnePagePreview show={true} />
        {isExitClicked && company.introductoryMessage && (
          <SharingOneLinkPopUp
            introMessage={company.introductoryMessage}
            oneLink={company.oneLink}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default OneLink;
