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
import { useEffect, useState } from "react";
import {
  getChatSettings,
  getCommunitySettings,
} from "../../../../Service/user";
import {
  setChatProfile,
  setCommunityProfile,
} from "../../../../Store/features/chat/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  OffcanvasBSContainer,
  OffcanvasBSBody,
  OffcanvasBSHeader,
} from "../../../PopUp/OffcanvasBS";
import EditChatSettings from "./Edit/EditChatSettings";

export default function ChatSettings({ setIsSettingsOpen }) {
  const dispatch = useDispatch();
  const chatId = useSelector((state) => state.chat.chatId);
  const userId = useSelector((state) => state.chat.userId);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const chatProfile = useSelector((state) => state.chat.chatProfile);
  const communityProfile = useSelector((state) => state.chat.communityProfile);

  useEffect(() => {
    if (isCommunitySelected) {
      getCommunitySettings(chatId)
        .then(({ data }) => {
          dispatch(setCommunityProfile(data));
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getChatSettings(loggedInUser._id, userId, chatId)
        .then(({ data }) => {
          dispatch(setChatProfile(data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isCommunitySelected, userId, chatId, dispatch, loggedInUser._id]);

  const fileTypeCount = isCommunitySelected
    ? communityProfile?.images?.length +
      communityProfile?.videos?.length +
      communityProfile?.documents?.length
    : chatProfile?.images?.length +
      chatProfile?.videos?.length +
      chatProfile?.documents?.length;

  // const fileTypeCountString = fileTypeCount.toString().padStart(3, ' ');

  return (
    <div
      className="chat_settings bg-white rounded-4 shadow-sm p-3 w-100"
      style={{ border: "1px solid #cfcfcf" }}
    >
      {/* Settings Header */}
      <SettingsHeader setIsSettingsOpen={setIsSettingsOpen} />

      {/* Settings About */}
      <SettingsAbout />

      {/* Settings - member in communities */}
      <div className="settings_member_communities py-4 border-bottom">
        <SettingsBlackHeader>
          <CommunitiesIcon width="17px" height="17px" />
          {isCommunitySelected ? (
            <p
              className="text-uppercase m-0"
              style={{ fontSize: "12px", fontWeight: "400" }}
            >
              Members
            </p>
          ) : (
            <p
              className="text-uppercase m-0"
              style={{ fontSize: "12px", fontWeight: "400" }}
            >
              member in {chatProfile?.communities?.length} communities
            </p>
          )}
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
            media (
            {isCommunitySelected
              ? communityProfile?.images?.length
              : chatProfile?.images?.length}
            )
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
            file type ({fileTypeCount})
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

      {/* BootStrap off canvas */}
      <OffcanvasBSContainer
        id={"chatSettingsOffcanvas"}
        containerClasses={`bg-light`}
      >
        <OffcanvasBSHeader
          title={"Edit Chat Settings"}
          classNames={`border-bottom`}
        />
        <OffcanvasBSBody>
          <EditChatSettings />
        </OffcanvasBSBody>
      </OffcanvasBSContainer>
    </div>
  );
}
