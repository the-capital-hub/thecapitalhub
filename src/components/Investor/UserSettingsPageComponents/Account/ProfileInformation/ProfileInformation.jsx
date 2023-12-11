import React from "react";
import "./ProfileInformation.scss";
import SettingsBar from "../../Shared/SettingsBar/SettingsBar";

export default function ProfileInformation() {
  return (
    <div className="profile-information-wrapper d-flex flex-column shadow-sm">
      <h4 className="m-0 px-3 py-3">Profile Information</h4>
      <div className="border-top px-3 py-3">
        <SettingsBar
          text={"Name, Personal Information, Bio"}
          link="profile-information"
        />
      </div>
    </div>
  );
}
