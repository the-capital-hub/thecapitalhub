import React, { useEffect, useRef, useState } from "react";
import "./InvestorOneLinkAppointment.scss";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsMobileView,
  setPageTitle,
} from "../../../Store/features/design/designSlice";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";

export default function InvestorOneLinkAppointment() {
  // Get params
  const { userId } = useParams();
  const isMobileView = useSelector(selectIsMobileView);
  const dispatch = useDispatch();

  const [view, setView] = useState("week");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const dateRef = useRef();

  useEffect(() => {
    if (isMobileView) {
      setView("day");
    }
  }, [isMobileView]);

  useEffect(() => {
    document.title = "Appointment | The Capital Hub";
    dispatch(setPageTitle("Appointment"));
  }, [dispatch]);

  const handleDateClick = (e) => {
    dateRef.current.showPicker();
  };

  return (
    <div className="appointment_wrapper mb-5">
      <h2 className="mb-3 px-3 px-xxl-0 fw-bold page_heading">
        Schedule an appointment
      </h2>
      <section className="appointment_section  py-4 rounded-4 border d-flex flex-column gap-4">
        <h4 className="div__heading px-3 px-lg-4">Select Date & Time</h4>

        <div className="two_col_container">
          {/* Calendar */}
          <div className="calendar d-flex flex-column gap-4">
            <div className="px-3 px-lg-4 d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-center border-bottom p-3">
              {!isMobileView && <ViewSelect setView={setView} view={view} />}
              {isMobileView && (
                <>
                  <label
                    htmlFor="myScheduleDatePicker"
                    className="d-flex align-items-center gap-3 fs-4"
                    onClick={handleDateClick}
                  >
                    <input
                      type="date"
                      name="date"
                      id="myScheduleDatePicker"
                      className="date-picker visually-hidden"
                      value={date}
                      ref={dateRef}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <span>{moment(date).format("DD-MM-YYYY")}</span>
                    <FaRegCalendarAlt size={25} color="var(--d-l-grey)" />
                  </label>
                </>
              )}
            </div>

            {/* Scheduler */}
            <div className="px-lg-4 calender__div">
              <CalendarContainer
                view={view}
                setView={setView}
                investor={false}
                oneLinkId={userId}
                date={date}
                setDate={setDate}
              />
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
