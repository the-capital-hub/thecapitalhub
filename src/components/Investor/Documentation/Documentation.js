import React, { useContext, useEffect } from "react";
import "./Documentation.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import IntroductoryMessage from "../OneLink/IntroductoryMessage/IntroductoryMessage";
import UploadContainer from "./UploadContainer/UploadContainer";
import HalfbendCard from "../InvestorGlobalCards/Documentation/HalfbendCard/HalfbendCard";

const Documentation = () => {
  return (
    <div className="container-fluid investorHome_main_container">
      <div className="row mt-2">
        <div className="col">
          <SmallProfileCard text={"Documentation"} />
          <div className="content-70 mt-3">
            {/* <div className="row">
              <div className="col-12 mt-2">
                <IntroductoryMessage
                  title={
                    "Upload and share all you importance documentaion in one go"
                  }
                />
              </div>
            </div> */}
            <div className="row">
              <div className="col-12 mt-2">
                <UploadContainer />
              </div>
            </div>
            <div className="row">
              {/* <div className="col-12 mt-2"> */}
              <HalfbendCard />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="col  d-none d-xl-block">
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
  );
};

export default Documentation;
