import React, { useState, useEffect } from "react";
import "./InvestorOnelink.scss";
import ShareLink from "../../../components/Investor/OneLink/ShareLink/ShareLink";
import IntroductoryMessage from "../../../components/Investor/OneLink/IntroductoryMessage/IntroductoryMessage";
import RightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { useDispatch, useSelector } from "react-redux";
import OnePagePreview from "../../../components/Investor/OneLink/OnePagePreview/OnePagePreview";
import SharingOneLinkPopUp from "../../../components/PopUp/SharingOneLinkPopUp/SharingOneLinkPopUp";
import { getInvestorById } from "../../../Service/user";
import ThreeDotsImage from "../../../Images/whiteTheeeDots.svg";
import FolderImage from "../../../Images/Folder.svg";
import VideoImage from "../../../Images/Video.svg";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
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
} from "../../../components/Shared/OnePager";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";

export default function InvestorOnelink() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  //   console.log(loggedInUser);
  // const userId = loggedInUser._id;
  const [isExitClicked, setIsExitClicked] = useState(false);
  const [company, setCompany] = useState([]);
  const dispatch = useDispatch();
  // const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    document.title = "One Link | The Capital Hub";
    dispatch(setPageTitle("One Link"));
  }, []);

  // Fetch data by userId
  useEffect(() => {
    getInvestorById(loggedInUser.investor)
      .then(({ data }) => {
        setCompany(data);
      })
      .catch(() => setCompany([]));
  }, [loggedInUser]);

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
              previous={company?.previousIntroductoryMessage}
              input={true}
              isExitClicked={isExitClicked}
              setCompany={setCompany}
              investor
              showPreviousIM={true}
            />
          </div>
          {/* Right Side content */}
          <div className="right_content">
            <RightProfileCard />
            <RecommendationCard maxCount={3} />
          </div>
        </div>

        {/* Onepage Preview */}
        {/* <OnePagePreview show={true} /> */}

        {company.length !== 0 ? (
          <div className="onePager_wrapper d-flex flex-column gap-4" theme="investor">
            <OnePagerCompanyLogo image={company.logo} />
            <OnePagerCompanyInfo
              company={company.companyName}
              location={company.location}
              startedAtDate={company.startedAtDate}
              keyFocus={company.keyFocus}
              socialLinks={company.socialLinks}
              showEdit={false}
            />
            {/* <OnePagerCompanyAbout
              description={company.description}
              problem={company.problem}
              solution={company.solution}
              showEdit={true}
            /> */}
          </div>
        ) : (
          <SpinnerBS className={"d-flex justify-content-center w-100 py-5"} />
        )}


        {isExitClicked && company.introductoryMessage && (
          <SharingOneLinkPopUp
            introMessage={company.introductoryMessage}
            oneLink={company.oneLink}
            onClose={handleClosePopup}
            investor
          />
        )}
      </div>
    </MaxWidthWrapper>
  );
}
