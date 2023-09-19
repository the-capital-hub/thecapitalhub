import { useState } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "../Syndicates/Syndicates.scss";
import "./MySchedule.scss";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import Meetings from "../../../components/NewInvestor/MyScheduleComponents/Meetings";

const MEETINGTYPES = ["Daily", "Weekly", "Monthly"];

export default function MySchedule() {
  const [view, setView] = useState("week");

  function handleViewSelect(selectedView) {
    console.log(selectedView);
    setView(selectedView);
  }

  return (
    <div className="mySchedule__wrapper px-3 border-start">
      <div className="pb-4 pt-2">
        <SmallProfileCard text="My Schedule" />
      </div>
      <section className="section__wrapper bg-white rounded-3 border mb-5 pb-5 d-flex flex-column gap-5">
        <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-center border-bottom p-3">
          <ViewSelect handleViewSelect={handleViewSelect} />
          <button className="btn-capital lh-1">Create Meeting</button>
        </div>

        <div className="schedule__container px-3">
          <div className="calender__div">
            <CalendarContainer view={view} />
          </div>
          <div className="meetings__div p-3 border rounded-4 d-flex flex-column gap-2">
            {MEETINGTYPES.map((type, index) => {
              return <Meetings key={type} type={type} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
