import React from "react";
import SettingsBar from "../../Shared/SettingsBar/SettingsBar";
import "./GeneralPreferences.scss";

export default function GeneralPreferences() {
  return (
    <div className="general-preferences-wrapper d-flex flex-column shadow-sm">
      <h4 className="m-0 px-3 py-3">General Preferences</h4>
      <div className="border-top px-3 py-3">
        <SettingsBar text={"Language"} />
      </div>
      <div className="border-top px-3 py-3">
        <SettingsBar text={"Auto Play Videos"} />
      </div>
      <div className="border-top px-3 py-3">
        <SettingsBar text={"Content Language"} />
      </div>
    </div>
  );
}
