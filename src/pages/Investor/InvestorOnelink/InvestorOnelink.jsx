import React, { useState, useEffect } from "react";
import "./InvestorOnelink.scss";
import ShareLink from "../../../components/Investor/OneLink/ShareLink/ShareLink";
import IntroductoryMessage from "../../../components/Investor/OneLink/IntroductoryMessage/IntroductoryMessage";
import RightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { useSelector } from "react-redux";
import OnePagePreview from "../../../components/Investor/OneLink/OnePagePreview/OnePagePreview";
import SharingOneLinkPopUp from "../../../components/PopUp/SharingOneLinkPopUp/SharingOneLinkPopUp";
import { getStartupByFounderId } from "../../../Service/user";
import ThreeDotsImage from "../../../Images/whiteTheeeDots.svg";
import FolderImage from "../../../Images/Folder.svg";
import VideoImage from "../../../Images/Video.svg";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";

export default function InvestorOnelink() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  //   console.log(loggedInUser);
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
      <div className="investor_onelink_wrapper mb-4">
        <div className="investor_onelink_into_container">
          {/* Main Content */}
          <div className="main_content">
            <SmallProfileCard text={"One Link"} />
            <ShareLink
              OneLink={company?.oneLink}
              onExitClick={handleExitClick}
              investor
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
            />
          </div>
          {/* Right Side content */}
          <div className="right_content">
            <RightProfileCard />
            <RecommendationCard />
          </div>
        </div>

        {/* Onepage Preview */}
        <OnePagePreview show={true} />
        {isExitClicked && (
          <SharingOneLinkPopUp
            introMessage={company.introductoryMessage}
            oneLink={company.oneLink}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </MaxWidthWrapper>
  );
}
