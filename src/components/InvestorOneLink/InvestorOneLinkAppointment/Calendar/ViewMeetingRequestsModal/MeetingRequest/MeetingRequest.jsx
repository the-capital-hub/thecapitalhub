import React, { useState } from "react";
import Linkify from "react-linkify";
import SpinnerBS from "../../../../../Shared/Spinner/SpinnerBS";
import { acceptMeetingRequest } from "../../../../../../Service/user";
import { formatDateTime } from "../../../../../../utils/Calendar";

export default function MeetingRequest({ request }) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleAccept = async (meetingId, requestId) => {
    try {
      setLoading(true);
      const response = await acceptMeetingRequest(meetingId, requestId);
      if (response.status === 200) {
        setLoading(false);
        setAlert({ success: "Request Accepted!" });
        // setTimeout(() => {
        //   closeRef.current.click();
        // }, 2000);
        setTimeout(() => {
          setAlert(null);
        }, 2500);
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({ error: "Error Accepting Request! Please try again." });
    }
  };

  return !alert ? (
    <div className="meeting-request">
      <div className="request-details">
        <span className="request-name">{request.name}</span>
        <div className="request-dates">
          <p>
            <strong>Agenda:</strong> {request.agenda}
          </p>
          <p>
            <strong>Start:</strong> {formatDateTime(request.start)}
          </p>
          <p>
            <strong>End:</strong> {formatDateTime(request.end)}
          </p>
          {expanded && (
            <>
              <p>
                <strong>Company:</strong> {request.companyName}
              </p>
              <Linkify>
                <p>
                  <strong>Onelink:</strong> {request.oneLink}
                </p>
              </Linkify>
              <p>
                <strong>Phone:</strong> {request.phone}
              </p>
              <p>
                <strong>Email:</strong> {request.email}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="request-actions">
        <button className="view_button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "View More"}
        </button>
        <button
          className="create_button"
          onClick={() => handleAccept(request.meetingId, request._id)}
        >
          {loading ? (
            <>
              <SpinnerBS
                spinnerSizeClass="spinner-border-sm"
                colorClass={"text-black"}
              />
              <span className="text-muted">Please wait..</span>
            </>
          ) : (
            "Accept"
          )}
        </button>
      </div>
    </div>
  ) : (
    <div className="d-flex p-5 justify-content-center align-items-center grow_in">
      {alert?.success && <h4 className="text-center">{alert.success}</h4>}
      {alert?.error && (
        <h4 className="text-center text-danger">{alert.error}</h4>
      )}
    </div>
  );
}
