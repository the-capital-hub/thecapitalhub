import React, { useRef, useState, useEffect } from "react";
import "./ViewMeetingRequestModal.scss";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../../PopUp/ModalBS";
import SpinnerBS from "../../../../Shared/Spinner/SpinnerBS";
import { getAllMeetingRequests, acceptMeetingRequest } from "../../../../../Service/user";
import Linkify from "react-linkify";

export default function ViewMeetingRequestModal({ selectedMeeting, setMeetings }) {
  // States for loading and alert
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const closeRef = useRef();
  const [expandedRequest, setExpandedRequest] = useState("null");

  const [meetingRequests, setMeetingRequests] = useState([]);
  useEffect(() => {
    getAllMeetingRequests()
      .then(({ data }) => {
        setMeetingRequests(data);
      })
      .catch((error) => console.log(error));
  }, [alert])

  const formatDateTime = (dateTime) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    // Parse the original date
    const originalDate = new Date(dateTime);

    // Format the date
    return originalDate.toLocaleDateString("en-US", options);
  };

  const handleAccept = async (meetingId, requestId) => {
    try {
      setLoading(true);
      const response = await acceptMeetingRequest(meetingId, requestId);
      if (response.status === 200) {
        setLoading(false);
        setAlert({ success: "Request Accepted!" });
        setTimeout(() => {
          closeRef.current.click();
        }, 2000);
        setTimeout(() => {
          setAlert(null);
        }, 2500);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }

  // const meetingRequests = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     company: "ABC Inc",
  //     agenda: "Discussion",
  //     onelink: "example.com",
  //     phone: "123-456-7890",
  //     email: "john@example.com",
  //     startDate: "2023-10-21 14:30",
  //     endDate: "2023-10-21 16:00"
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     company: "XYZ Corp",
  //     agenda: "Presentation",
  //     onelink: "xyzcorp.com",
  //     phone: "987-654-3210",
  //     email: "jane@xyzcorp.com",
  //     startDate: "2023-10-22 10:00",
  //     endDate: "2023-10-22 12:00"
  //   },
  // ];

  const handleViewMore = (requestId) => {
    if (expandedRequest === requestId) {
      setExpandedRequest("");
    } else {
      setExpandedRequest(requestId);
    }
  };

  return (
    <div className="view_meeting_modal_wrapper">
      <ModalBSContainer id={"meetingRequestsModal"}>
        <ModalBSHeader title={"Meeting Requests"} closeRef={closeRef} />
        <ModalBSBody>
          {!alert ? (
            meetingRequests && meetingRequests.length > 0 ? (
              meetingRequests.map((request) => (
                <div key={request.id} className="meeting-request">
                  <div className="request-details">
                    <span className="request-name">{request.name}</span>
                    <div className="request-dates">
                      <p><strong>Agenda:</strong> {request.agenda}</p>
                      <p><strong>Start:</strong> {formatDateTime(request.start)}</p>
                      <p><strong>End:</strong> {formatDateTime(request.end)}</p>
                      {expandedRequest === request.id && (
                        <>
                          <p><strong>Company:</strong> {request.companyName}</p>
                          <Linkify>
                            <p><strong>Onelink:</strong> {request.oneLink}</p>
                          </Linkify>
                          <p><strong>Phone:</strong> {request.phone}</p>
                          <p><strong>Email:</strong> {request.email}</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="request-actions">
                    <button className="view_button" onClick={() => handleViewMore(request.id)}>
                      {expandedRequest === request.id ? "Hide Details" : "View More"}
                    </button>
                    <button className="create_button" onClick={() => handleAccept(request.meetingId, request._id)}>
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
              ))
            ) : (
              <div className="no-requests-found">
                <p>No Request Found</p>
              </div>
            )
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