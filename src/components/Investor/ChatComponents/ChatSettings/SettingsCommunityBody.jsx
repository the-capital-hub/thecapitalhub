import React from "react";
import "./SettingsCommunityBody.scss";
import Default from "../../../../Images/Chat/default-user-avatar.webp";

export default function SettingsCommunityBody() {
  return (
    <>
      <CommunityBar />
      <CommunityBar />
    </>
  );
}

// community bar component
const CommunityBar = () => {
  return (
    <div className="border-item px-3 py-3 d-flex align-items-center gap-2 ">
      <img
        src={"" || Default}
        alt="community profile"
        style={{ width: "40px", height: "40px" }}
        className="shadow-sm rounded-circle"
      />
      <div className="d-flex flex-column">
        <p className="m-0" style={{ fontWeight: "500" }}>
          {"The Capital HUB"}
        </p>
        <p
          className="m-0 text-clip--25"
          style={{
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          {"You, Raghu, Pramod, Upma, Preeti"}
        </p>
      </div>
    </div>
  );
};
