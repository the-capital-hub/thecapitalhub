import React, { useEffect, useState } from "react";
import "./InvestorOneLinkAppointment.scss";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
import MeetingInfo from "../../../components/InvestorOneLink/InvestorOneLinkAppointment/MeetingInfo/MeetingInfo";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import { getAllMeetings } from "../../../Service/user";
import { useParams } from "react-router-dom";

export default function InvestorOneLinkAppointment() {
  // Get params
  const { userId } = useParams();

  const [view, setView] = useState("week");
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [meetingsData, setMeetingsData] = useState(null);

  // Fetch meetingData for user here
  useEffect(() => {
    async function getMeetings() {
      try {
        const { data } = await getAllMeetings(userId);
        // console.log("Meetings", data);

        const result = data.map((meeting, index) => {
          return {
            ...meeting,
            start: new Date(meeting.start),
            end: new Date(meeting.end),
          };
        });

        // Save to State
        setMeetingsData(result);
      } catch (error) {
        console.log("Error fetching meetings", error);
      }
    }

    getMeetings();
  }, []);

  // // handle calendar view select
  // function handleViewSelect(selectedView) {
  //   console.log(selectedView);
  //   setView(selectedView);
  // }

  return (
    <div className="appointment_wrapper mb-5 ps-3 leftBorder">
      <h2 className="mb-3">Schedule an appointment</h2>

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
              {meetingsData ? (
                <div className="calender__div">
                  <CalendarContainer
                    view={view}
                    meetingsData={meetingsData}
                    setView={setView}
                    investor={false}
                  />
                </div>
              ) : (
                <SpinnerBS className="d-flex w-100 justify-content-center" />
              )}
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
