import React from "react";
import SettingsHeader from "./SettingsHeader";
import SettingsAbout from "./SettingsAbout";
import SettingsBlackHeader from "./SettingsBlackHeader";
import CommunitiesIcon from "../CommunitiesIcon";
import SettingsBlackBody from "./SettingsBlackBody";
import SettingsCommunityBody from "./SettingsCommunityBody";
import SettingsMediaBody from "./SettingsMediaBody";
import IconFile from "../../SvgIcons/IconFile";
import SettingsFilesBody from "./SettingsFilesBody";
import IconMedia from "../../SvgIcons/IconMedia";

export default function ChatSettings() {
  return (
    <div className="chat_settings bg-white rounded-4 shadow-sm p-3">
      {/* Settings Header */}
      <SettingsHeader />

      {/* Settings About */}
      <SettingsAbout />

      {/* Settings - member in communities */}
      <div className="settings_member_communities py-4 border-bottom">
        <SettingsBlackHeader>
          <CommunitiesIcon width="17px" height="17px" />
          <p
            className="text-uppercase m-0"
            style={{ fontSize: "12px", fontWeight: "400" }}
          >
            member in {"two"} communities
          </p>
        </SettingsBlackHeader>
        <SettingsBlackBody>
          <SettingsCommunityBody />
        </SettingsBlackBody>
      </div>

      {/* Settings - media */}
      <div className="settings_media py-4 border-bottom">
        <SettingsBlackHeader>
          <IconMedia />
          <p
            className="text-uppercase m-0"
            style={{ fontSize: "12px", fontWeight: "400" }}
          >
            media ({"22"})
          </p>
          <p
            className="text-capitalize m-0 orange_underline text_orange ms-auto"
            style={{ fontSize: "12px", fontWeight: "400" }}
          >
            show all
          </p>
        </SettingsBlackHeader>
        <SettingsBlackBody>
          <SettingsMediaBody />
        </SettingsBlackBody>
      </div>

      {/* Settings - Files */}
      <div className="settings_files py-4">
        <SettingsBlackHeader>
          <IconFile />
          <p
            className="text-uppercase m-0"
            style={{ fontSize: "12px", fontWeight: "400" }}
          >
            file type ({"12"})
          </p>
          <p
            className="text-capitalize m-0 orange_underline text_orange ms-auto"
            style={{ fontSize: "12px", fontWeight: "400" }}
          >
            show all
          </p>
        </SettingsBlackHeader>
        <SettingsBlackBody>
          <SettingsFilesBody />
        </SettingsBlackBody>
      </div>
    </div>
  );
}
