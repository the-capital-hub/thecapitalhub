import React from "react";
import "./CreateMeetingModal.scss";
import {
  ModalBSContainer,
  ModalBSHeader,
  ModalBSBody,
} from "../../../PopUp/ModalBS";

export default function CreateMeetingModal({
  meetings,
  newMeeting,
  setNewMeeting,
}) {
  return (
    <div className="create_meeting_modal_wrapper">
      <ModalBSContainer id={"createMeetingModal"}>
        <ModalBSHeader title={"Create Meeting"} />
        <ModalBSBody>
          <p>new meeting:{JSON.stringify(newMeeting)}</p>
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
