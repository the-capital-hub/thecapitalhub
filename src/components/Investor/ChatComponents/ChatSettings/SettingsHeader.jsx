import React from "react";
import IconClose from "../../SvgIcons/IconClose";

export default function SettingsHeader({ setIsSettingsOpen }) {
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
        src={""}
        alt={"user name"}
        style={{ width: "70px", height: "70px" }}
      />

      {/* Name and designation */}
      <div className="settings_user_text d-flex flex-column align-items-center">
        <h5 style={{ fontSize: "20px", fontWeight: "500" }}>{"Harideep"}</h5>
        <p
          style={{
            color: "rgba(113, 113, 113, 1)",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          {"UI/UX Designer"}
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
          <img
            src={""}
            alt=""
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(234, 238, 242, 1)",
          }}
        >
          <img
            src={""}
            alt=""
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
