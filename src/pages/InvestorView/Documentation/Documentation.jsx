import { NavBar, SideBar, Card } from "../../../components/InvestorView";
import "./Documentation.scss";

const Documentation = () => {
  return (
    <div className="documentation">
      <Card text={"Financials"} />
      <Card text={"Pitch Deck"} />
      <Card text={"Legal"} />
      <Card text={"Update"} />
      <Card text={"KYC Details"} />
      <Card text={"Business"} />
    </div>
  );
};

export default Documentation;
