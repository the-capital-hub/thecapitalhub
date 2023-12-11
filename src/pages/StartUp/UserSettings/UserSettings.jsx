import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import "./UserSettings.scss";
import SettingsTabs from "../../../components/Investor/UserSettingsPageComponents/SettingsTabs/SettingsTabs";
import Account from "../../../components/Investor/UserSettingsPageComponents/Account/Account";
import SignInAndSecurity from "../../../components/Investor/UserSettingsPageComponents/SignInAndSecurity/SignInAndSecurity";
import PrivacyPolicy from "../../../components/Investor/UserSettingsPageComponents/PrivacyPolicy/PrivacyPolicy";
import Logout from "../../../components/Investor/UserSettingsPageComponents/Logout/Logout";
import { useSelector } from "react-redux";
import { selectIsMobileView } from "../../../Store/features/design/designSlice";

const SETTINGS_CONTENT = {
  account: <Account />,
  signInAndSecurity: <SignInAndSecurity />,
  privacyPolicy: <PrivacyPolicy />,
  logout: <Logout />,
};

export default function UserSettings() {
  const isMobileView = useSelector(selectIsMobileView);

  const [activeTab, setActiveTab] = useState("account");

  useEffect(() => {
    if (isMobileView) {
      setActiveTab(null);
    } else {
      setActiveTab("account");
    }
  }, [isMobileView]);

  return (
    <div className="userSettings-page-wrapper my-5 mx-lg-3">
      <MaxWidthWrapper>
        {/* Mobile View */}
        {isMobileView && (
          <>
            <div className="userSettings-page-container d-flex flex-column gap-3">
              <div className="z-0" id="sidebarSettings">
                <SettingsTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>

              {/* Settings Content */}
              <div
                className="setttings-content flex-grow-1"
                id="settingsContent"
              >
                {SETTINGS_CONTENT[activeTab]}
              </div>
            </div>
          </>
        )}

        {/* Large Screen View */}
        {!isMobileView && (
          <>
            <div className="userSettings-page-container d-flex flex-column flex-lg-row gap-3">
              <div className="z-0" id="sidebarSettings">
                <SettingsTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>

              {/* Settings Content */}
              <div
                className="setttings-content flex-grow-1"
                id="settingsContent"
              >
                {SETTINGS_CONTENT[activeTab]}
              </div>
            </div>
          </>
        )}
      </MaxWidthWrapper>
    </div>
  );
}
