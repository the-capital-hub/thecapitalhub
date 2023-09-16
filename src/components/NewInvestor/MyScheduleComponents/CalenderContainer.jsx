import moment from "moment";
import BigCalendar from "./BigCalendar";
import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarContainer.scss";

const calendarData = {
  defaultDate: new Date(),
  scrollToTime: new Date(new Date().setHours(new Date().getHours() - 0.5)),
  views: ["day", "week", "month"],
  messages: {
    previous: "<--",
    next: "-->",
  },
  max: new Date(new Date().setHours(21, 0, 0)),
  min: new Date(new Date().setHours(9, 0, 0)),
  formats: {
    dayFormat: (date) => moment(date).format("ddd D"),
    dayHeaderFormat: (date) => moment(date).format("MMMM, YYYY"),
    dayRangeHeaderFormat: (date) => moment(date).format("MMMM, YYYY"),
    timeGutterFormat: (date) => moment(date).format("h a"),
  },
};

const mlocalizer = momentLocalizer(moment);

export default function CalendarContainer({ view }) {
  return (
    <div className="calendar__container">
      <BigCalendar
        calendarData={calendarData}
        localizer={mlocalizer}
        view={view}
      />
    </div>
  );
}
