import { useContext, useEffect, useState } from "react";
import "./Documentation.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import IntroductoryMessage from "../OneLink/IntroductoryMessage/IntroductoryMessage";
import UploadContainer from "./UploadContainer/UploadContainer";
import HalfbendCard from "../InvestorGlobalCards/Documentation/HalfbendCard/HalfbendCard";
import { Card } from "../../InvestorView";
import UploadModal from "./UploadModal/UploadModal";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="documentation">
      {showModal && <UploadModal onCancel={setShowModal} />}
      <div className="left">
        <IntroductoryMessage
          title={"Uplod your document"}
          para={
            "As the Founder at Capital HUB, Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.As the Founder at Capital HUB, Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture."
          }
        />
        <UploadContainer onClicked={setShowModal} />
        <div className="cards">
          <Card
            onClicked={() => navigate("/documentation/financials")}
            text={"Financials"}
          />
          <Card
            onClicked={() => navigate("/documentation/pitchdeck")}
            text={"Pitch Deck"}
          />
          <Card
            onClicked={() => navigate("/documentation/legal")}
            text={"Legal"}
          />
          <Card
            onClicked={() => navigate("/documentation/update")}
            text={"Update"}
          />
          <Card
            onClicked={() => navigate("/kycdetails")}
            text={"KYC Details"}
          />
          <Card onClicked={() => navigate("/business")} text={"Business"} />
        </div>
      </div>

      <div className="right">
        <RightProfileCard />
        <RecommendationCard />
        <NewsCorner />
      </div>
    </div>
    // <div className="container-fluid investorHome_main_container">
    //   <div className="row mt-2">
    //     <div className="col">
    //       <SmallProfileCard text={"Documentation"} />
    //       <div className="content-70 mt-3">
    //         <div className="row">
    //           <div className="col-12 mt-2">
    //             <IntroductoryMessage title={"Upload your documentation"} />
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-12 mt-2">{/* <UploadContainer /> */}</div>
    //         </div>
    //         <div className="row">
    //           {/* <div className="col-12 mt-2"> */}
    //           <HalfbendCard />
    //           {/* </div> */}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col">
    //       <div className="content-30">
    //         <div className="row">
    //           <RightProfileCard />
    //           <RecommendationCard />
    //           <NewsCorner />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Documentation;
