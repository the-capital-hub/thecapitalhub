import React, { useState } from "react";
import Linkify from "react-linkify";
import SpinnerBS from "../../../../../Shared/Spinner/SpinnerBS";
import { acceptMeetingRequest } from "../../../../../../Service/user";
import { formatDateTime } from "../../../../../../utils/Calendar";

export default function MeetingRequest({ request, setMeetingRequests }) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleAccept = async (meetingId, requestId) => {
    setLoading(true);

    try {
      const { data } = await acceptMeetingRequest(meetingId, requestId);
      console.log("Req accept response", data);

      setLoading(false);
      setAlert({ success: "Request Accepted!" });
      // setTimeout(() => {
      //   closeRef.current.click();
      // }, 2000);
      setTimeout(() => {
        setAlert(null);
        // Set Meeting Requests data
        setMeetingRequests((prev) =>
          prev.filter((request) => request.meetingId !== data._id)
        );
      }, 2500);
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
        <button
          type="button"
          className="view_button"
          onClick={() => setExpanded(!expanded)}
          disabled={loading}
        >
          {expanded ? "Hide Details" : "View More"}
        </button>
        <button
          type="button"
          className="create_button"
          onClick={() => handleAccept(request.meetingId, request._id)}
          disabled={loading}
        >
          {loading ? (
            <>
              <SpinnerBS
                spinnerSizeClass="spinner-border-sm"
                colorClass={"text-black"}
              />
              <span className="text-muted" style={{ fontSize: "12px" }}>
                Please wait..
              </span>
            </>
          ) : (
            "Accept"
          )}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          style={{ borderRadius: "10px" }}
          disabled={loading}
        >
          Decline
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
