import React from "react";
import IconFile from "../../SvgIcons/IconFile";
import IconVideo from "../../SvgIcons/IconVideo";
import IconChevronRight from "../../SvgIcons/IconChevronRight";

export default function SettingsFilesBody() {
  return (
    <>
      <FileBar fileType="documents" fileCount="06">
        <IconFile color={"black"} />
      </FileBar>
      <FileBar fileType="videos" fileCount="06">
        <IconVideo color={"black"} />
      </FileBar>
    </>
  );
}

// File Bar component
const FileBar = ({ children, fileType, fileCount }) => (
  <div className="d-flex gap-2">
    <div className="px-3 py-3 d-flex align-items-center gap-2 w-100 ">
      <div
        className="bg-white rounded-3 d-flex justify-content-center align-items-center"
        style={{ width: "40px", height: "40px" }}
      >
        {children}
      </div>
      <div className="d-flex flex-column">
        <p className="m-0 text-capitalize" style={{ fontWeight: "500" }}>
          {fileType}
        </p>
        <p
          className="m-0"
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "rgba(159, 159, 159, 1)",
          }}
        >
          {fileCount} Files
        </p>
      </div>
      <div className="ms-auto align-self-start">
        <IconChevronRight />
      </div>
    </div>
  </div>
);
