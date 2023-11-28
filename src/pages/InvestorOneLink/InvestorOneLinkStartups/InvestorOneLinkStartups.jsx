import { useOutletContext } from "react-router";
import InvestedStartUpCard from "./InvestedStartUpCard/InvestedStartUpCard";
import "./InvestorOneLinkStartups.scss";

export default function InvestorOneLinkStartups() {
  const { company } = useOutletContext();

  return (
    <div className="investor-onelink-startups-invested">
      <h3 className="px-3 px-xxl-0 fw-bold page_heading">Startups Invested</h3>
      <div className="startups-list">
        {company?.startupsInvested?.map((startUp) => (
          <InvestedStartUpCard startUp={startUp} />
        ))}
      </div>
    </div>
  );
}
