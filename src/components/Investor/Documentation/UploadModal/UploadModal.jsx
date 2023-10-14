import { useState, useRef } from "react";
import "./UploadModal.scss";
import axios from "axios";
import { environment } from "../../../../environments/environment";
import AfterSuccessPopUp from "../../../PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import { useSelector } from "react-redux";
import { s3 } from "../../../../Service/awsConfig";
import IconDelete from "../../SvgIcons/IconDelete";
const baseUrl = environment.baseUrl;

const UploadModal = ({ onCancel }) => {
  // Fetch loggedInUser from global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // State for folder
  const [folder, setFolder] = useState("pitchdeck");
  // State for files
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  // State for popup
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClosePopup = () => {
    setShowPopUp(false);
    onCancel(false);
  };

  // Handle File select
  const handleFileSelect = (e) => {
    setFiles(e.target.files);
  };

  // Handle Remove file
  const handleRemoveFile = (e, index) => {
    const filesCopy = [...files].toSpliced(index, 1);
    setFiles([...filesCopy]);
  };

  // Handle Upload
  const handlePdfUploadClick = async () => {
    console.log("Test", process.env.AWS_ACCESS_KEY);
    if (fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0];
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name}`;
      const params = {
        Bucket: "capitalhubdocuments",
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

  // Render File list
  const renderFileList = () => (
    <ol className="list-group list-group-numbered">
      {[...files].map((file, index) => {
        return (
          <button
            type="button"
            className="list-group-item list-group-item-action file_list_button d-flex "
            key={index}
            onClick={(e) => handleRemoveFile(e, index)}
          >
            <span className="text-start">{file.name}</span>{" "}
            <span className="ms-auto ps-4">
              <IconDelete />
            </span>
          </button>
        );
      })}
    </ol>
  );

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
              <div className="position-relative d-flex flex-column flex-lg-row align-items-center">
                <div className="">
                  <input
                    type="file"
                    id="files"
                    ref={fileInputRef}
                    multiple
                    onChange={handleFileSelect}
                    className="visually-hidden"
                  />
                  <label htmlFor="files" className="doc_upload_label">
                    Select Files
                  </label>
                </div>
                {files.length !== 0 && (
                  <pre className="ms-lg-3 mt-3 mt-lg-0">{renderFileList()}</pre>
                )}
              </div>
              <button className="upload_button" onClick={handlePdfUploadClick}>
                Upload
              </button>
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
