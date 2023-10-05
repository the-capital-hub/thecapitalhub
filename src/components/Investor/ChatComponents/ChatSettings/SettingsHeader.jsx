import React from "react";
import IconClose from "../../SvgIcons/IconClose";
import Default from "../../../../Images/Chat/default-user-avatar.webp";
import IconVideo from "../../SvgIcons/IconVideo";
import IconCall from "../../SvgIcons/IconCall";
import { useSelector } from "react-redux";

export default function SettingsHeader({ setIsSettingsOpen }) {
  const chatProfile = useSelector((state) => state.chat.chatProfile);
  const communityProfile = useSelector((state) => state.chat.communityProfile);
  const isCommunitySelected = useSelector((state) => state.chat.isCommunitySelected);

  return (
    <div className="settings_header d-flex flex-column align-items-center gap-1 border-bottom pb-4">
      <button
        className="align-self-end bg-transparent border-0"
        onClick={() => setIsSettingsOpen(false)}
      >
        <IconClose />
      </button>

      {/* Profile picture */}
      <img
        src={(isCommunitySelected ? communityProfile?.community?.profileImage : chatProfile?.user?.profilePicture) || Default}
        alt={"user name"}
        style={{ width: "70px", height: "70px", borderRadius: "50%" }}
      />

      {/* Name and designation */}
      <div className="settings_user_text d-flex flex-column align-items-center">
        <h5 style={{ fontSize: "20px", fontWeight: "500" }}>
          {isCommunitySelected
            ? communityProfile?.community?.communityName
            : `${chatProfile?.user?.firstName} ${chatProfile?.user?.lastName}`}
        </h5>

        <p
          style={{
            color: "rgba(113, 113, 113, 1)",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          {isCommunitySelected ? " " : chatProfile?.user?.designation}
        </p>
      </div>

      {/* Action Icons */}
      <div className="settings_user_actions d-flex gap-2">
        <div
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(234, 238, 242, 1)",
          }}
        >
          <IconCall width="24px" height="24px" />
        </div>
        <div
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(234, 238, 242, 1)",
          }}
        >
          <IconVideo width="24px" height="24px" />
        </div>
      </div>
    </div>
  );
}