import { useEffect } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { NavBar, SideBar, Card } from "../../../components/InvestorView";
import "./Documentation.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Documentation = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  useEffect(() => {
    document.title = "Documentation - One Link | The Capital Hub";
  }, []);
  return (
    <div className="documentation">
      <h1>Documentation</h1>
      <div className="docscontainer">
        <Card
          text={"Financials"}
          onClicked={() =>
            navigate(`/onelink/${username}/documentation/financials`)
          }
        />
        <Card
          text={"Pitch Deck"}
          onClicked={() =>
            navigate(`/onelink/${username}/documentation/pitchdeck`)
          }
        />
        <Card
          text={"Legal"}
          onClicked={() => navigate(`/onelink/${username}/documentation/legal`)}
        />
        <Card
          text={"Update"}
          onClicked={() =>
            navigate(`/onelink/${username}/documentation/update`)
          }
        />
        <Card
          text={"KYC Details"}
          onClicked={() =>
            navigate(`/onelink/${username}/documentation/kycdetails`)
          }
        />
        <Card
          text={"Business"}
          onClicked={() =>
            navigate(`/onelink/${username}/documentation/business`)
          }
        />
      </div>
    </div>
  );
};

export default Documentation;
