import React, { useRef, useState } from "react";
import "./EditMeetingModal.scss";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../../PopUp/ModalBS";
import SpinnerBS from "../../../../Shared/Spinner/SpinnerBS";
import { deleteMeeting } from "../../../../../Service/user";

export default function EditMeetingModal({ selectedMeeting, setMeetings }) {
  // States for loading and alert
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const closeRef = useRef();

  //   Handle Edit meeting
  async function handleEditMeeting(e) {
    e.preventDefault();
  }

  //   handle delete meeting
  async function handleDeleteMeeting(e) {
    setLoading(true);

    try {
      const { data } = await deleteMeeting(selectedMeeting._id);
      //   console.log("deleted meeting", data);

      // Revert loading
      setLoading(false);
      setAlert({ success: "Meeting Removed!" });

      // Update calendar Meetings
      setMeetings((prev) => prev.filter((meeting) => meeting._id !== data._id));

      setTimeout(() => {
        closeRef.current.click();
      }, 2000);
      setTimeout(() => {
        setAlert(null);
      }, 2500);
    } catch (error) {
      console.log("Error deleting meeting", error);

      //   Revert Loading
      setLoading(false);
      setAlert({ error: "Error removing Meeting! Please try again." });

      setTimeout(() => {
        closeRef.current.click();
      }, 2000);
      setTimeout(() => {
        setAlert(null);
      }, 2500);
    }
  }

  return (
    <div className="edit_meeting_modal_wrapper">
      <ModalBSContainer id={"editMeetingModal"}>
        <ModalBSHeader title={"Delete Meeting"} closeRef={closeRef} />
        <ModalBSBody>
          {!alert ? (
            <form
              onSubmit={handleEditMeeting}
              className="edit_meeting_form d-flex flex-column gap-3 py-3"
            >
              {/* Time */}
              <div className="d-flex justify-content-around gap-3">
                <fieldset className="w-50">
                  <legend>Start Time</legend>
                  <p className="m-0">
                    {selectedMeeting?.start.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </fieldset>

                <fieldset className="w-50">
                  <legend>End Time</legend>
                  <p className="m-0">
                    {selectedMeeting?.end.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </fieldset>
              </div>

              {/* Date */}
              <fieldset>
                <legend>Date</legend>
                <p className="m-0">
                  {selectedMeeting?.end.toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    weekday: "long",
                  })}
                </p>
              </fieldset>

              {/* Title */}
              <fieldset>
                <legend>Title</legend>
                <p className="m-0">{selectedMeeting?.title}</p>
              </fieldset>

              {/* Submit */}
              <button
                type="button"
                className={`btn btn-danger d-flex justify-content-center align-items-center gap-2 ${
                  loading ? "opacity-50" : ""
                } `}
                disabled={loading}
                onClick={handleDeleteMeeting}
              >
                {loading ? (
                  <>
                    <SpinnerBS
                      spinnerSizeClass="spinner-border-sm"
                      colorClass={"text-white"}
                    />
                    <span className="text-muted">Please wait</span>
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </form>
          ) : (
            <div className="d-flex p-5 justify-content-center align-items-center grow_in">
              {alert?.success && (
                <h4 className="text-center">{alert.success}</h4>
              )}
              {alert?.error && (
                <h4 className="text-center text-danger">{alert.error}</h4>
              )}
            </div>
          )}
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
