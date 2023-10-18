import React, { useState } from "react";
import "./CreateMeetingModal.scss";
import {
  ModalBSContainer,
  ModalBSHeader,
  ModalBSBody,
  ModalBSFooter,
} from "../../../../PopUp/ModalBS";
import { useSelector } from "react-redux";
import SpinnerBS from "../../../../Shared/Spinner/SpinnerBS";

export default function CreateMeetingModal({
  meetings,
  newMeeting,
  setNewMeeting,
}) {
  // Fetch loggedInUser
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  // Handle create Meeting
  function handleCreateMeeting(e) {
    e.preventDefault();
    // console.log("submitted");

    // Start loading
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    // API call
  }

  // Handle title
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <div className="create_meeting_modal_wrapper">
      <ModalBSContainer id={"createMeetingModal"}>
        <ModalBSHeader title={"Create Meeting"} />
        <ModalBSBody>
          <form
            onSubmit={handleCreateMeeting}
            className="newMeeting_form d-flex flex-column gap-3 py-3"
          >
            {/* Date */}
            <fieldset>
              <legend>Date</legend>
              <p className="m-0">
                {newMeeting?.end.toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </p>
            </fieldset>

            {/* Time */}
            <div className="d-flex justify-content-around gap-3">
              <fieldset>
                <legend>Start Time</legend>
                <p className="m-0">
                  {newMeeting?.start.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </fieldset>

              <fieldset>
                <legend>End Time</legend>
                <p className="m-0">
                  {newMeeting?.end.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </fieldset>
            </div>

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
              className="create_button d-flex justify-content-center align-items-center gap-2"
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
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
