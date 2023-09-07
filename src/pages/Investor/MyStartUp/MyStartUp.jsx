import React from "react";
import "./MyStartUp.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import MyInvestmentCard from "../InvestorCards/MyInvestmentCard/MyInvestmentCard";
import logoIcon from "../../../Images/investorIcon/Rectangle 1577.png";
import EyeLikeImage from "../../../Images/investorIcon/Ellipse 192.svg";
import ChartComponent from "./ChartComponent";
import PostInvestmentCard from "../InvestorCards/PostInvestmentCard/PostInvestmentCard";

const MyStartUp = () => {
  return (
    <>
      <div className="container-fluid mystartup_main_container">
        <SmallProfileCard text={"My Startup"} />
        <div className="row mt-2">
          <div className="col-12 startup_container">
            <h4 className="title_h4">My Investments</h4>
            <hr />
            <div className="card_container">
              <MyInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
              <MyInvestmentCard
                logo={logoIcon}
                text="Investment 2"
                para="Some description for Investment 2."
                images={EyeLikeImage}
                smallText="Small text for Investment 2."
              />
              <MyInvestmentCard
                logo={logoIcon}
                text="Investment 3"
                para="Some description for Investment 3."
                images={EyeLikeImage}
                smallText="Small text for Investment 3."
              />
            </div>
            <hr />
            <h4 className="title_h4">My Interest</h4>
            <hr />
            <div className="card_container">
              <MyInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
              <MyInvestmentCard
                logo={logoIcon}
                text="Investment 2"
                para="Some description for Investment 2."
                images={EyeLikeImage}
                smallText="Small text for Investment 2."
              />
              <MyInvestmentCard
                logo={logoIcon}
                text="Investment 3"
                para="Some description for Investment 3."
                images={EyeLikeImage}
                smallText="Small text for Investment 3."
              />
            </div>
          </div>
        </div>

        <div className="row mt-2 big_card_container">
          <div className="col-6 left_container">
            <h4 className="title_h4">Summary</h4>
            <hr />
            <div className="chart_container">
              <ChartComponent />
            </div>
          </div>
          <div className="col-6 right_container">
            <h4 className="title_h4">Past Investments</h4>
            <hr />
            <div className="two_by_two_card_container">
              <PostInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
              <PostInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
              <PostInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStartUp;
