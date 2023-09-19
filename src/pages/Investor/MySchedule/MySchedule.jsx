import { useState } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "../Syndicates/Syndicates.scss";
import "./MySchedule.scss";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import Meetings from "../../../components/NewInvestor/MyScheduleComponents/Meetings";

const MEETINGTYPES = ["daily", "weekly", "monthly"];

export default function MySchedule() {
  const [view, setView] = useState("week");

  // Fetch meetingData for user here
  const EVENTS = [
    {
      start: new Date(2023, 8, 18, 9, 30),
      end: new Date(2023, 8, 18, 12, 45),
      title: "Work",
    },
    {
      start: new Date(2023, 8, 19, 10, 0),
      end: new Date(2023, 8, 19, 11, 30),
      title: "Test Event",
    },
    {
      start: new Date(2023, 8, 20, 12, 0),
      end: new Date(2023, 8, 20, 13, 0),
      title: "Test Event",
    },
    {
      start: new Date(2023, 8, 21, 13, 30),
      end: new Date(2023, 8, 21, 16, 45),
      title: "Test Event",
    },
    {
      start: new Date(2023, 8, 22, 15, 30),
      end: new Date(2023, 8, 22, 16, 45),
      title: "Test Event",
    },
  ];

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
          <button className="btn-capital lh-1 py-0 py-md-2">
            Create Meeting
          </button>
        </div>

        <div className="schedule__container px-3">
          <div className="calender__div">
            <CalendarContainer
              view={view}
              meetingsData={EVENTS}
              setView={setView}
            />
          </div>
          <div className="meetings__div p-3 border rounded-4 d-flex flex-column gap-4">
            {MEETINGTYPES.map((type, index) => {
              return (
                <Meetings
                  key={type}
                  type={type}
                  meetingsData={EVENTS}
                  view={view}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
