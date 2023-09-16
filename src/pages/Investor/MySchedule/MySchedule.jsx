import { useState } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "../Syndicates/Syndicates.scss";
import "./MySchedule.scss";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";

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
      <section className="section__wrapper bg-white rounded-4 border mb-5">
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
          <ViewSelect handleViewSelect={handleViewSelect} />
          <button className="btn-capital">Create Meeting</button>
        </div>

        <div className="schedule__container d-flex">
          <div className="w-75 p-3 border-end">
            <CalendarContainer view={view} />
          </div>
          <div className="w-25 p-3">
            <h1>My Meetings</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
