import InvestedStartUpCard from "./InvestedStartUpCard/InvestedStartUpCard";
import "./InvestorOneLinkStartups.scss";

export default function InvestorOneLinkStartups() {
  const investedStartups = [1, 1];

  return (
    <section className="investor-onelink-startups-invested">
      <h3>Startups Invested</h3>
      <div className="startups-list">
        {investedStartups?.map((startUp) => (
          <InvestedStartUpCard startUp={startUp} />
        ))}
      </div>
    </section>
  );
}
