import { useState, useRef } from "react";
import "./UploadModal.scss";
import axios from "axios";
import { environment } from "../../../../environments/environment";
import AfterSuccessPopUp from "../../../PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import { useSelector } from "react-redux";
const baseUrl = environment.baseUrl;
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "AKIA3ADZ252QBA67V4VO",
  secretAccessKey: "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",
  region: "us-east-1",
});

const s3 = new AWS.S3();

const UploadModal = ({ onCancel }) => {
  const [folder, setFolder] = useState("pitchdeck");
  const [showPopUp, setShowPopUp] = useState(false);
  const fileInputRef = useRef(null);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const handleClosePopup = () => {
    setShowPopUp(false);
    onCancel(false);
  };

  const handlePdfUploadClick = async () => {
    if (fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0];
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name}`;
      const params = {
        Bucket: "capitalhub",
        Key: `documents/${fileName}`,
        Body: file,
      };

      try {
        const res = await s3.upload(params).promise();
        console.log("Result:");
        const requestBody = {
          fileUrl: res.Location,
          fileName: file.name,
          userId: loggedInUser._id,
          folderName: folder,
        };
        await axios
          .post(`${baseUrl}/documentation/uploadDocument`, requestBody)
          .then((response) => {
            console.log("response", response);
            if (response.status === 200) {
              setShowPopUp(true);
            }
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
          });
      } catch (error) {
        console.error("Error uploading file to S3:", error);
      }
    }
  };
  return (
    <div className="uploadModal">
      <div className="blackbg" onClick={() => onCancel(false)}></div>
      <div className="modalcontainer">
        <div className="modalwrapper">
          <h1>Select your folder</h1>

          <select
            onChange={(e) => setFolder(e.target.value)}
            name="Folder"
            id=""
          >
            {/* <option value="financials">Financials</option> */}
            <option value="pitchdeck">Pitch Deck</option>
            <option value="business">Business</option>
            <option value="kycdetails">KYC Details</option>
            <option value="legal and compliance">Legal and Compliance</option>
            {/* <option value="update">Update</option> */}
          </select>

          {folder && (
            <>
              <input type="file" ref={fileInputRef} />
              <button onClick={handlePdfUploadClick}>Upload</button>
            </>
          )}
        </div>
      </div>
      {}
      {showPopUp && (
        <AfterSuccessPopUp savedFile={true} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default UploadModal;
