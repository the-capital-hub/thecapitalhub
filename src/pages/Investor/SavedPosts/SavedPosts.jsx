import { useState } from "react";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import "../Syndicates/Syndicates.scss";
import "./SavedPosts.scss";
import NavigatedCardViewer from "../../../components/Investor/SavePost/NavigatedCardViewer/NavigatedCardViewer";

export default function SavedPosts() {
  const [selectedTab, setSelectedTab] = useState("startups");

  return (
    <div className="savedPosts__wrapper px-3 border-start pb-5 ">
      {/* Main content */}
      <section className="section__wrapper main__content d-flex flex-column gap-5 ">
        {/* Page indicators */}
        <div className="pt-2">
          <SmallProfileCard text="Saved Posts" />
        </div>

        {/* Saved posts heading */}
        <div className="savedPosts__heading">
          <h4 className="bg-white border rounded-4 shadow-sm p-3">
            Find all your saved posts here.
          </h4>
        </div>

        {/* Saved Posts container */}
        <div className="savedPosts__container bg-white border rounded-4 overflow-hidden">
          <NavigatedCardViewer />
        </div>
      </section>

      {/* Right side content */}
      <aside className="aside__content d-flex flex-column gap-3">
        <RightProfileCard />
        <RecommendationCard />
        <NewsCorner />
      </aside>
    </div>
  );
}