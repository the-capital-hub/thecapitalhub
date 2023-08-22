import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { NavBar, SideBar, Card } from "../../../components/InvestorView";
import "./Documentation.scss";

const Documentation = () => {
  return (
    <div className="documentation">
      <h1>Documentation</h1>
      <div className="docscontainer">
        <Card text={"Financials"} />
        <Card text={"Pitch Deck"} />
        <Card text={"Legal"} />
        <Card text={"Update"} />
        <Card text={"KYC Details"} />
        <Card text={"Business"} />
      </div>
    </div>
  );
};

export default Documentation;
