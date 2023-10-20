import { useMemo, useCallback, useRef, useState } from "react";
import { Calendar } from "react-big-calendar";
import { ModalBsLauncher } from "../../PopUp/ModalBS";
import CreateMeetingModal from "../../InvestorOneLink/InvestorOneLinkAppointment/Calendar/CreateMeetingModal/CreateMeetingModal";
import moment from "moment";
import EditMeetingModal from "../../InvestorOneLink/InvestorOneLinkAppointment/Calendar/EditMeetingModal/EditMeetingModal";
import RequestMeetingModal from "../../InvestorOneLink/InvestorOneLinkAppointment/Calendar/RequestMeetingModal/RequestMeetingModal";

export default function BigCalendar({
  calendarData,
  localizer,
  view,
  setView,
  meetingsData,
  investor,
}) {
  // States for meetings
  const [meetings, setMeetings] = useState(meetingsData);
  const [newMeeting, setNewMeeting] = useState(null);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const createRef = useRef();
  const editRef = useRef();
  const requestRef = useRef();

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
      // Check if selected slot is in the past
      if (moment(start, "min").isBefore(moment(), "min")) {
        window.alert("Unable to travel to past!");
        return;
      }
      // console.log("start", start, "end", end);
      setNewMeeting({ start, end, title: "" });
      createRef.current.click();
    },
    [setMeetings]
  );

  // Handle Select event
  const handleSelectEvent = useCallback((meeting) => {
    if (!investor) {
      // Check if selected slot is in the past
      if (moment(meeting.start, "min").isBefore(moment(), "min")) {
        window.alert("Unable to travel to past!");
        return;
      }
    }

    // console.log("to delete", meeting);
    // Set selectedMeeting
    setSelectedMeeting(meeting);
    if (investor) {
      editRef.current.click();
    } else {
      requestRef.current.click();
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
        onView={(newView) => setView(newView)}
        views={views}
        selectable={investor}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        scrollToTime={scrollToTime}
        formats={formats}
        messages={messages}
        startAccessor="start"
        endAccessor="end"
      />

      <ModalBsLauncher id={"createMeetingModal"} launchRef={createRef} />
      <ModalBsLauncher id={"editMeetingModal"} launchRef={editRef} />
      <ModalBsLauncher id={"requestMeetingModal"} launchRef={requestRef} />

      {/*Create Meeting Modal */}
      <CreateMeetingModal
        meetings={meetings}
        newMeeting={newMeeting}
        setMeetings={setMeetings}
      />
      {/* Edit/Delete Meeting Modal */}
      <EditMeetingModal
        selectedMeeting={selectedMeeting}
        setMeetings={setMeetings}
      />
      {/* Request Meeting Modal */}
      <RequestMeetingModal selectedMeeting={selectedMeeting} />
    </>
  );
}
