import { useEffect, useState } from "react";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import "../Syndicates/Syndicates.scss";
import "./SavedPosts.scss";
import NavigatedCardViewer from "../../../components/Investor/SavePost/NavigatedCardViewer/NavigatedCardViewer";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import { useDispatch } from "react-redux";

export default function SavedPosts() {
  const [selectedTab, setSelectedTab] = useState("startups");
  const dispatch = useDispatch();

  useEffect(() => {
    window.title = "Saved Posts | The Capital Hub";
    dispatch(setPageTitle("Saved Posts"));
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="savedPosts__wrapper px-3 border-start pb-5 ">
        {/* Main content */}
        <section className="section__wrapper main__content d-flex flex-column gap-5 ">
          {/* Page indicators */}
          <div className="">
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
    </MaxWidthWrapper>
  );
}
