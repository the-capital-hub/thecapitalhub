import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "../Syndicates/Syndicates.scss";
import "./MySchedule.scss";

export default function MySchedule() {
  return (
    <div className="mySchedule__wrapper px-3 border-start">
      <div className="pb-4 pt-2">
        <SmallProfileCard text="My Schedule" />
      </div>
      <section className="section__wrapper bg-white rounded-4 p-3 border">
        <div className="schedule__container">
          <h1>My Schedule</h1>
        </div>
      </section>
    </div>
  );
}
