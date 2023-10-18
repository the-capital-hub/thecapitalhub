import moment from "moment";
import BigCalendar from "./BigCalendar";
import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarContainer.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CreateMeetingModal from "../../InvestorOneLink/InvestorOneLinkAppointment/Calendar/CreateMeetingModal";
import { useState } from "react";

// Custom event component
const EventComponent = ({ event }) => {
  const { title, start, end } = event;
  const date = moment(start).format("ddd MMM DD");
  const startTime =
    moment(start).minutes() === 0
      ? moment(start).format("ha")
      : moment(start).format("h:ma");
  const endTime =
    moment(end).minutes() === 0
      ? moment(end).format("ha")
      : moment(end).format("h:ma");

  const dayColors = [
    "rgba(81, 81, 81, 1)",
    "rgba(255, 144, 84, 1)",
    "rgba(173, 133, 238, 1)",
    "rgba(131, 188, 187, 1)",
    "rgba(65, 140, 253, 1)",
    "#ff6600",
    "rgba(131, 188, 187, 1)",
  ];

  let meetingFlag;
  if (moment(start, "day").isBefore(moment(), "day")) {
    meetingFlag = "completed";
  } else if (moment(start, "day").isAfter(moment(), "day")) {
    meetingFlag = "up coming";
  } else if (moment(start, "day").isSame(moment(), "day")) {
    meetingFlag = "today";
  }

  return (
    <div
      className="custom__event"
      style={{
        backgroundColor: `${dayColors[moment(start).day()]}`,
        width: "100%",
        height: "100%",
      }}
    >
      <p className="event__text small fw-light lh-base ">{title}</p>
      <p className="event__text small fw-light lh-base ">{date}</p>
      <p className="event__text small fw-light lh-base ">
        {startTime}-{endTime}
      </p>
      <div className="meeting__flag">
        <p className=" small fw-light lh-base text-black bg-white px-2 rounded-pill text-capitalize">
          {meetingFlag}
        </p>
      </div>
    </div>
  );
};

// Props for react-big-calendar
const calendarData = {
  components: {
    event: EventComponent,
  },
  defaultDate: new Date(),
  scrollToTime: new Date(new Date().setHours(new Date().getHours() - 0.5)),
  views: ["day", "week", "month"],
  messages: {
    previous: <FaArrowLeft />,
    next: <FaArrowRight />,
  },
  max: new Date(new Date().setHours(21, 0, 0)),
  min: new Date(new Date().setHours(9, 0, 0)),
  formats: {
    dayFormat: (date) => moment(date).format("ddd D"),
    dayHeaderFormat: (date) => moment(date).format("MMMM, YYYY"),
    dayRangeHeaderFormat: ({ start, end }) =>
      moment(start).format("MMMM, YYYY"),
    timeGutterFormat: (date) => moment(date).format("h a"),
    eventTimeRangeFormat: ({ start, end }) => {
      return `${moment(start).format("ha")}-${moment(end).format("ha")}`;
    },
  },
};
const mlocalizer = momentLocalizer(moment);

// Calendar Container
export default function CalendarContainer({ view, meetingsData, setView }) {
  return (
    <div className="calendar__container">
      <BigCalendar
        calendarData={calendarData}
        localizer={mlocalizer}
        view={view}
        setView={setView}
        meetingsData={meetingsData}
      />
    </div>
  );
}
