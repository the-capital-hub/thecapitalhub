import { useMemo, useCallback, useRef, useState } from "react";
import { Calendar } from "react-big-calendar";
import { ModalBsLauncher } from "../../PopUp/ModalBS";
import CreateMeetingModal from "../../InvestorOneLink/InvestorOneLinkAppointment/Calendar/CreateMeetingModal/CreateMeetingModal";

export default function BigCalendar({
  calendarData,
  localizer,
  view,
  setView,
  meetingsData,
}) {
  // States for meetings
  const [meetings, setMeetings] = useState(meetingsData);
  const [newMeeting, setNewMeeting] = useState(null);
  const launchRef = useRef();

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

  // Handle Slot Select
  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      // console.log("start", start, "end", end);
      launchRef.current.click();
      setNewMeeting({ start: start, end: end, title: "" });
      // const title = window.prompt("New Meeting name");
      // if (title) {
      //   setMeetings((prev) => [...prev, { start, end, title }]);
      // }
    },
    [setMeetings]
  );

  // Handle Select event
  const handleSelectEvent = useCallback((meeting) => {
    // console.log(meeting);
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
    <>
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

      <ModalBsLauncher id={"createMeetingModal"} launchRef={launchRef} />

      {/*Create Meeting Modal */}
      <CreateMeetingModal
        meetings={meetings}
        newMeeting={newMeeting}
        setNewMeeting={setNewMeeting}
      />
    </>
  );
}
