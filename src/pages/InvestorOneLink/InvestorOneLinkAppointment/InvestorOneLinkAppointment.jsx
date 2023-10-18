import React, { useState } from "react";

import "./InvestorOneLinkAppointment.scss";
import IconAppointment from "../../../components/InvestorOneLink/SvgIcons/IconAppointment";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";

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

export default function InvestorOneLinkAppointment() {
  const [view, setView] = useState("week");

  function handleViewSelect(selectedView) {
    console.log(selectedView);
    setView(selectedView);
  }

  return (
    <div className="appointment_wrapper mb-5 ps-3 leftBorder">
      <h2 className="mb-3">Schedule an appointment</h2>

      <section className="appointment_section px-3 py-4 px-lg-4 bg-white rounded border d-flex flex-column gap-4">
        <h4 className="div__heading">Select Date & Time</h4>

        <div className="two_col_container">
          {/* Calendar */}
          <div className="calendar d-flex flex-column gap-4">
            <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-center border-bottom p-3">
              <ViewSelect handleViewSelect={handleViewSelect} />
            </div>

            <div className="calendar border rounded-4">
              <CalendarContainer
                view={view}
                meetingsData={EVENTS}
                setView={setView}
              />
            </div>

            {/* <div className="time_pickers d-flex gap-4">
              <input
                type="time"
                name="start"
                id="start"
                className="time_input"
                required
              />
              <input
                type="time"
                name="end"
                id="end"
                className="time_input"
                required
              />
            </div> */}

            <div className="action_buttons d-flex gap-3">
              <button className="bg-transparent border fs-5 py-3 rounded-3 w-50">
                Cancel
              </button>
              <button className="btn-capital fs-5 py-3 w-50">
                Create a Schedule
              </button>
            </div>
          </div>

          {/* Meeting Info */}
          <div className="meeting_info border rounded-4 p-lg-4 p-3">
            <h4>Meeting for Startups Invested companie’s.</h4>

            <div className="d-flex gap-2">
              <IconAppointment height="20px" width="20px" />
              <p>1 hour</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
