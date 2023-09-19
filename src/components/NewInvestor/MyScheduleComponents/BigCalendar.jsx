import { useState, useMemo, useCallback } from "react";
import { Calendar } from "react-big-calendar";

export default function BigCalendar({
  calendarData,
  localizer,
  view,
  setView,
  meetingsData,
}) {
  const [meetings, setMeetings] = useState(meetingsData);

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
      onView={setView}
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
