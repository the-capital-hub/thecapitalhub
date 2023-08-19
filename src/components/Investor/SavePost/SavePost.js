// import React from 'react'
// import './SavedPost.scss'
// const SavePost = () => {
//   return (
//     <div>SavePost</div>
//   )
// }

// export default SavePost

import React, { useContext, useEffect } from "react";
import "./SavedPost.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import NavigatedCardViewer from "./NavigatedCardViewer/NavigatedCardViewer";

const SavePost = () => {
  return (
    <div className="container-fluid savedpost_main_container">
      <div className="row mt-2">
        <div className="col">
          <SmallProfileCard text={"Saved Post"} />
          <div className="content-70">
            <div className="row">
              <div className="col-12 mt-2">
                <div className="box_container">
                  <h5>Find all your saved posts here</h5>
                </div>
              </div>
            </div>

            {/* nav container section */}
            <div className="row">
              <div className="col-12 mt-2">
                <div className="nav_container">
                  <NavigatedCardViewer />
                </div>
              </div>
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

export default SavePost;
