import React, { useState } from "react";
import "./EditChatSettings.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateCommunity } from "../../../../../Service/user";
import {
  setCommunityProfile,
} from "../../../../../Store/features/chat/chatSlice";

export default function EditChatSettings({ theme = "startup" }) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const communityProfile = useSelector((state) => state.chat.communityProfile);
  const [aboutText, setAboutText] = useState("");
  const dispatch = useDispatch();
  const handleTextAreaChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleSave = () => {
    const updatedData = {
      about: aboutText,
    };

    updateCommunity(communityProfile?.community._id, updatedData)
      .then(({ data }) => {
        console.log(data);
        const updatedCommunityProfile = {
          ...communityProfile,
          community: {
            ...communityProfile.community,
            ...updatedData,
          },
        };
        dispatch(setCommunityProfile(updatedCommunityProfile));

        console.log(communityProfile);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="edit_settings_container d-flex flex-column gap-3">
      <fieldset className="edit_about rounded-2">
        <legend className="px-2 py-1 bg-white rounded-pill">About</legend>
        <textarea
          name="about"
          id="about"
          rows="8"
          className="edit_chat_input"
          value={aboutText}
          onChange={handleTextAreaChange}
        />
      </fieldset>

      <button type="button" className={`btn-base ${theme}`} onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
