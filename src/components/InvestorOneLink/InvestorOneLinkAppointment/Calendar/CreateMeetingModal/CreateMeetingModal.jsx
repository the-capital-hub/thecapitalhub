import React, { useRef, useState } from "react";
import "./CreateMeetingModal.scss";
import {
  ModalBSContainer,
  ModalBSHeader,
  ModalBSBody,
  ModalBSFooter,
} from "../../../../PopUp/ModalBS";
import { useSelector } from "react-redux";
import SpinnerBS from "../../../../Shared/Spinner/SpinnerBS";
import { createMeetingAPI } from "../../../../../Service/user";

export default function CreateMeetingModal({
  meetings,
  newMeeting,
  setMeetings,
}) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [title, setTitle] = useState("");
  const closeRef = useRef();

  // Handle create Meeting
  async function handleCreateMeeting(e) {
    e.preventDefault();
    // console.log("submitted");

    const newMeetingData = {
      startDateTime: newMeeting.startDateTime,
      endDateTime: newMeeting.endDateTime,
      title: title,
    };

    // Start loading
    setLoading(true);

    // API call
    try {
      const response = await createMeetingAPI(newMeetingData);
      console.log(response);

      // Revert loading and title
      setLoading(false);
      setTitle("");

      // set success alert
      setAlert("Meeting Created!");
      // Update Calender meetings
      setMeetings((prev) => {
        return [
          ...prev,
          {
            start: newMeeting.startDateTime,
            end: newMeeting.endDateTime,
            title: title,
          },
        ];
      });
      setTimeout(() => {
        closeRef.current.click();
      }, 2000);
      setTimeout(() => {
        setAlert(null);
      }, 2500);
    } catch (error) {
      console.log("Create meeting error:", error);

      // Revert loading and title
      setLoading(false);
      setTitle("");

      // set Error alert
      setAlert("Error creating a meeting! Please try again.");
      setTimeout(() => {
        closeRef.current.click();
      }, 2000);
      setTimeout(() => {
        setAlert(null);
      }, 2500);
    }
  }

  // Handle title
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <div className="create_meeting_modal_wrapper">
      <ModalBSContainer id={"createMeetingModal"}>
        <ModalBSHeader title={"Create Meeting"} closeRef={closeRef} />
        <ModalBSBody>
          {!alert ? (
            <form
              onSubmit={handleCreateMeeting}
              className="newMeeting_form d-flex flex-column gap-3 py-3"
            >
              {/* Time */}
              <div className="d-flex justify-content-around gap-3">
                <fieldset className="w-50">
                  <legend>Start Time</legend>
                  <p className="m-0">
                    {newMeeting?.startDateTime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </fieldset>

                <fieldset className="w-50">
                  <legend>End Time</legend>
                  <p className="m-0">
                    {newMeeting?.endDateTime.toLocaleTimeString([], {
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
                  {newMeeting?.endDateTime.toLocaleDateString("en-IN", {
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
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="meeting_input"
                  placeholder="Enter Title"
                  onChange={handleTitle}
                  value={title}
                  required
                />
              </fieldset>

              {/* Submit */}
              <button
                type="submit"
                className={`create_button d-flex justify-content-center align-items-center gap-2 ${
                  loading ? "opacity-50" : ""
                } `}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <SpinnerBS spinnerSizeClass="spinner-border-sm" />
                    <span className="text-muted">Please wait</span>
                  </>
                ) : (
                  "Create"
                )}
              </button>
            </form>
          ) : (
            <div className="d-flex p-5 justify-content-center align-items-center grow_in">
              <h4>{alert}</h4>
            </div>
          )}
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
