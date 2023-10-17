import { useOutletContext } from "react-router";
import InvestedStartUpCard from "./InvestedStartUpCard/InvestedStartUpCard";
import "./InvestorOneLinkStartups.scss";

export default function InvestorOneLinkStartups() {
  const { company } = useOutletContext();

  return (
    <section className="investor-onelink-startups-invested">
      <h3>Startups Invested</h3>
      <div className="startups-list">
        {company?.startupsInvested?.map((startUp) => (
          <InvestedStartUpCard startUp={startUp} />
        ))}
      </div>
    </section>
  );
}
