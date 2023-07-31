import React from "react";
import "./UploadContainer.scss";
import UploadIcon from "../../../../Images/UploadIcon.svg";
const UploadContainer = () => {
  return (
    <div className="upload_container">
      <div className="image_container">
        <img src={UploadIcon} alt="Upload Icon" />
      </div>
      <p className="text">Click to upload or drag and drop the doc</p>
    </div>
  );
};

export default UploadContainer;
