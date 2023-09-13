import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "./LiveDeals.scss";

export default function LiveDeals() {
  return (
    <div className="liveDeals__container">
      <SmallProfileCard text="Live Deals" />
      <section className="liveDeals__section__wrapper">
        <h1>Live Deals</h1>
      </section>
    </div>
  );
}
