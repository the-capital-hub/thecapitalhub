import { useState, useMemo, useCallback } from "react";
import { Calendar } from "react-big-calendar";

const EVENTS = [
  {
    start: new Date(2023, 8, 16, 10, 0),
    end: new Date(2023, 8, 16, 11, 30),
    title: "Test Event",
  },
  {
    start: new Date(2023, 8, 13, 12, 0),
    end: new Date(2023, 8, 13, 13, 0),
    title: "Test Event",
  },
  {
    start: new Date(2023, 8, 15, 15, 30),
    end: new Date(2023, 8, 15, 16, 45),
    title: "Test Event",
  },
  {
    start: new Date(2023, 8, 12, 9, 30),
    end: new Date(2023, 8, 12, 12, 45),
    title: "Work",
  },
  {
    start: new Date(2023, 8, 17, 13, 30),
    end: new Date(2023, 8, 17, 16, 45),
    title: "Test Event",
  },
];

export default function BigCalendar({ calendarData, localizer, view }) {
  const [meetings, setMeetings] = useState(EVENTS);

  const {
    defaultDate,
    formats,
    max,
    min,
    messages,
    scrollToTime,
    views,
    components,
  } = useMemo(() => calendarData);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("New Meeting name");
      if (title) {
        setMeetings((prev) => [...prev, { start, end, title }]);
      }
    },
    [setMeetings]
  );

  const handleSelectEvent = useCallback((meeting) => {
    console.log(meeting);
    const confirmation = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmation) {
      setMeetings((prev) => {
        const meetings = [...prev];
        const selectedMeetingIndex = [...prev].indexOf(meeting);
        meetings.splice(selectedMeetingIndex, 1);
        return meetings;
      });
    }
  }, []);

  return (
    <Calendar
      components={components}
      defaultDate={defaultDate}
      events={meetings}
      localizer={localizer}
      max={max}
      min={min}
      showMultiDayTimes
      step={15}
      timeslots={4}
      defaultView="week"
      view={view}
      views={views}
      selectable
      onSelectEvent={handleSelectEvent}
      onSelectSlot={handleSelectSlot}
      scrollToTime={scrollToTime}
      formats={formats}
      messages={messages}
      startAccessor="start"
      endAccessor="end"
    />
  );
}
