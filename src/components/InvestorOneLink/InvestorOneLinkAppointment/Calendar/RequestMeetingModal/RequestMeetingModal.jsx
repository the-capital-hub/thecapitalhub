import React, { useRef, useState } from "react";
import IconFolder from "../../../SvgIcons/IconFolder";
import IconAppointment from "../../../SvgIcons/IconAppointment";
import IconFileUpload from "../../../SvgIcons/IconFileUpload";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../../PopUp/ModalBS";
import "./RequestMeetingModal.scss";

const REQUEST = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  agenda: "",
  oneLink: "",
};

export default function RequestMeetingModal({ selectedMeeting }) {
  //   const [files, setFiles] = useState(null);
  const closeRef = useRef();
  const [requestData, setRequestData] = useState(REQUEST);

  //   Handle input change
  function handleInputChange(e) {
    const { value, name } = e.target;

    if (name === "agenda") {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }

    setRequestData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="request_meeting_modal_wrapper">
      <ModalBSContainer id={"requestMeetingModal"}>
        <ModalBSHeader title={"Request Meeting"} closeRef={closeRef} />
        <ModalBSBody className={"modal_tall"}>
          <form
            onSubmit={""}
            className="request_meeting_form d-flex flex-column gap-3 py-3 px-lg-4 px-3"
          >
            {/* Name */}
            <fieldset>
              <legend className="">Name</legend>
              <input
                type="text"
                id="name"
                name="name"
                className="meeting_input"
                onChange={handleInputChange}
                value={requestData.name}
                required
              />
            </fieldset>

            {/* companyName */}
            <fieldset>
              <legend className="">Company Name</legend>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="meeting_input"
                onChange={handleInputChange}
                value={requestData.companyName}
                required
              />
            </fieldset>

            {/* Email */}
            <fieldset>
              <legend className="">Email</legend>
              <input
                type="email"
                id="email"
                name="email"
                className="meeting_input"
                onChange={handleInputChange}
                value={requestData.email}
                required
              />
            </fieldset>

            {/* Phone */}
            <fieldset>
              <legend className="">Phone Number</legend>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="meeting_input"
                onChange={handleInputChange}
                value={requestData.phone}
                required
              />
            </fieldset>

            {/* Agenda */}
            <fieldset>
              <legend className="">Agenda</legend>
              <textarea
                type="text"
                id="agenda"
                name="agenda"
                className="meeting_input"
                onChange={handleInputChange}
                value={requestData.agenda}
                rows={4}
                required
              />
            </fieldset>

            {/* OneLink */}
            <fieldset>
              <legend className="">OneLink</legend>
              <input
                type="text"
                id="oneLink"
                name="oneLink"
                className="meeting_input text-break"
                onChange={handleInputChange}
                value={requestData.oneLink}
                required
              />
            </fieldset>

            {/* Action Buttons */}
            <div className="action_buttons d-flex gap-3">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="bg-transparent border fs-6 py-3 rounded-3 w-50"
                onClick={() => setRequestData(REQUEST)}
              >
                Cancel
              </button>
              <button type="submit" className="btn-capital fs-6 py-3 w-50">
                Request Meeting
              </button>
            </div>
          </form>
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
