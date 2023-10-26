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
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getStartupByFounderId } from "../../../Service/user";
import SharingOneLinkPopUp from "../../PopUp/SharingOneLinkPopUp/SharingOneLinkPopUp";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import {
  OnePagerCompanyAbout,
  OnePagerCompanyInfo,
  OnePagerCompanyLogo,
  OnePagerFundAsking,
  OnePagerMarketSize,
  OnePagerProjections,
  OnePagerRoadmap,
  OnePagerSocialLinks,
  OnePagerTeam,
} from "../../Shared/OnePager";
import SpinnerBS from "../../Shared/Spinner/SpinnerBS";

const OneLink = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log(loggedInUser);
  const userId = loggedInUser._id;
  const [isExitClicked, setIsExitClicked] = useState(false);
  const [company, setCompany] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "One Link | The Capital Hub";
    dispatch(setPageTitle("One Link"));
  }, []);

  // Fetch data by userId
  useEffect(() => {
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
          {/* Main content */}

          <div className="main__content">
            {/* <SmallProfileCard text={"One Link"} /> */}
            {/* ShareLink */}
            <ShareLink
              OneLink={company?.oneLink}
              onExitClick={handleExitClick}
              isExitClicked={isExitClicked}
            />

            {/* Introductory message */}
            <IntroductoryMessage
              title={"Introductory message"}
              image={{
                threeDots: ThreeDotsImage,
                folder: FolderImage,
                video: VideoImage,
              }}
              para={company?.introductoryMessage}
              previous={company?.previousIntroductoryMessage}
              input={true}
              isExitClicked={isExitClicked}
              setCompany={setCompany}
            />
          </div>

          {/* Rightside content */}
          <div className="right__content">
            <RightProfileCard />
            <RecommendationCard />
            {/* <NewsCorner /> */}
          </div>
        </div>
        {/* <OnePagePreview show={true} /> */}

        {/* New OnePager start */}
        {company.length !== 0 ? (
          <div className="onePager_wrapper d-flex flex-column gap-4">
            <OnePagerCompanyLogo image={company.logo} />

            {/* onePager company info */}
            <OnePagerCompanyInfo
              company={company.company}
              location={company.location}
              startedAtDate={company.startedAtDate}
              keyFocus={company.keyFocus}
              socialLinks={company.socialLinks}
              showEdit={true}
            />

            {/* onePager company about */}
            <OnePagerCompanyAbout
              description={company.description}
              problem={company.problem}
              solution={company.solution}
              showEdit={true}
            />

            {/* onePager Market info */}
            <div className="bg-white rounded-4 border shadow-sm">
              <div className="border-bottom">
                <div className="px-3 px-lg-4 py-5 d-flex flex-column gap-5">
                  {/* Market Size */}
                  <OnePagerMarketSize companyData={company} />
                  {/* Social Links */}
                  <OnePagerSocialLinks companyData={company} />
                  {/* Projections */}
                  <OnePagerProjections companyData={company} />
                  {/* Fund Asking */}
                  <OnePagerFundAsking companyData={company} />
                  {/* Roadmap */}
                  <OnePagerRoadmap companyData={company} />
                  {/* Team */}
                  <OnePagerTeam team={company.team} />
                </div>
              </div>

              {/* Action buttons */}
              {/* <div className="onePager_action_buttons px-3 px-lg-4 py-5 d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="action_buttons_container d-flex flex-column flex-md-row gap-4">
                  <button
                    type="button"
                    className="text-black rounded-pill onePager_action_save"
                  >
                    Save Draft
                  </button>
                  <button
                    type="button"
                    className="text-white rounded-pill onePager_action_publish"
                  >
                    Publish
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        ) : (
          <SpinnerBS className={"d-flex justify-content-center w-100 py-5"} />
        )}

        {/* New OnePager end */}
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
