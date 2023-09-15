import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "../Syndicates/Syndicates.scss";
import "./MySchedule.scss";

export default function MySchedule() {
  return (
    <div className="mySchedule__wrapper px-3 border-start">
      <div className="pb-4 pt-2">
        <SmallProfileCard text="Live Deals" />
      </div>
      <section className="schedule__container">
        <h1>My Schedule</h1>
      </section>
    </div>
  );
}