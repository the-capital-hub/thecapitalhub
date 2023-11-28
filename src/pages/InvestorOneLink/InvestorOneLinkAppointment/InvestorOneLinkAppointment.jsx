import React, { useState } from "react";
import "./InvestorOneLinkAppointment.scss";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
// import MeetingInfo from "../../../components/InvestorOneLink/InvestorOneLinkAppointment/MeetingInfo/MeetingInfo";
// import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import { useParams } from "react-router-dom";

export default function InvestorOneLinkAppointment() {
  // Get params
  const { userId } = useParams();

  const [view, setView] = useState("week");
  // const [files, setFiles] = useState([]);
  // const [message, setMessage] = useState("");

  // Fetch meetingData for user here
  // const { meetingsData } = useGetAllMeetings(userId);

  return (
    <div className="appointment_wrapper mb-5">
      <h2 className="mb-3 px-3 px-xxl-0 fw-bold page_heading">
        Schedule an appointment
      </h2>

      <section className="appointment_section px-3 py-4 px-lg-4 bg-white rounded-4 border d-flex flex-column gap-4">
        <h4 className="div__heading">Select Date & Time</h4>

        <div className="two_col_container">
          {/* Calendar */}
          <div className="calendar d-flex flex-column gap-4">
            <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-center border-bottom p-3">
              <ViewSelect setView={setView} view={view} />
            </div>

            <div className="calendar">
              {/* Scheduler */}

              <div className="calender__div">
                <CalendarContainer
                  view={view}
                  setView={setView}
                  investor={false}
                  oneLinkId={userId}
                />
              </div>
            </div>

            {/* Action buttons */}
            {/* <div className="action_buttons d-flex gap-3">
              <button className="bg-transparent border fs-5 py-3 rounded-4 w-50">
                Cancel
              </button>
              <button className="btn-capital fs-5 py-3 w-50">
                Create a Schedule
              </button>
            </div> */}
          </div>

          {/* Meeting Info */}
          {/* <MeetingInfo
            files={files}
            setFiles={setFiles}
            message={message}
            setMessage={setMessage}
          /> */}
        </div>
      </section>
    </div>
  );
}
