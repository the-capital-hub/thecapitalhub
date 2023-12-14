import React from "react";
import "./AccountAccess.scss";
import SettingsBar from "../../Shared/SettingsBar/SettingsBar";
import { useSelector } from "react-redux";

export default function AccountAccess() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <div className="account-access-wrapper d-flex flex-column">
      <h3 className="m-0 px-3 py-3">Account Access</h3>
      <div className="border-top px-3 py-3">
        <SettingsBar text={"Email Address"} entry={loggedInUser.email} link={"manage-email-addresses"} />
      </div>

      <div className="border-top px-3 py-3">
        <SettingsBar text={"Phone Number"} />
      </div>

      <div className="border-top px-3 py-3">
        <SettingsBar text={"Change Password"} />
      </div>

      <div className="border-top px-3 py-3">
        <SettingsBar text={"Two-Step Verification"} entry={"On"} />
      </div>
    </div>
  );
}
