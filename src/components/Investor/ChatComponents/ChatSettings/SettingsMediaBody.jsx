import React from "react";

export default function SettingsMediaBody() {
  return (
    <div className="px-2 py-3 d-flex gap-2 flex-wrap">
      {/* Loop media images here */}
      <div
        className="bg-white rounded-2 d-flex justify-content-center align-items-center shadow-sm"
        style={{ width: "100px", height: "100px" }}
      >
        <img
          src=""
          alt="media item"
          className="rounded-2"
          style={{ width: "90px", height: "90px" }}
        />
      </div>
    </div>
  );
}
