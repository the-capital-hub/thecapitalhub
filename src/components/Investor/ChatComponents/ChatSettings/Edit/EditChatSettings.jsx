import React from "react";
import "./EditChatSettings.scss";

export default function EditChatSettings({ theme = "startup" }) {
  return (
    <div className="edit_settings_container d-flex flex-column gap-3">
      <fieldset className="edit_about rounded-2">
        <legend className="px-2 py-1 bg-white rounded-pill">About</legend>
        <textarea
          name="about"
          id="about"
          rows="8"
          className="edit_chat_input"
        />
      </fieldset>

      <button type="button" className={`btn-base ${theme}`}>
        Save
      </button>
    </div>
  );
}
