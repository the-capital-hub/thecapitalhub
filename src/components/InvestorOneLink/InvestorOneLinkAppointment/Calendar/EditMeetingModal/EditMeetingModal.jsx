import React from "react";
import "./EditMeetingModal.scss";

export default function EditMeetingModal({ selectedMeeting }) {
  // States for loading and alert
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  return (
    <div className="edit_meeting_modal_wrapper">
      <ModalBSContainer id={"editMeetingModal"}>
        <ModalBSHeader title={"Delete Meeting"} closeRef={closeRef} />
        <ModalBSBody>
          {!alert ? (
            <form
              onSubmit={handleCreateMeeting}
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
