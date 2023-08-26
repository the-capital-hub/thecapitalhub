import { useState, useRef } from "react";
import "./UploadModal.scss";
import axios from "axios";
import { environment } from "../../../../environments/environment";
import AfterSuccessPopUp from "../../../PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import { useSelector } from "react-redux";
const baseUrl = environment.baseUrl;

const UploadModal = ({ onCancel }) => {
  const [folder, setFolder] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const fileInputRef = useRef(null);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const handleClosePopup = () => {
    setShowPopUp(false);
    onCancel(false);
  };

  const handlePdfUploadClick = async () => {
    if (fileInputRef.current.files.length > 0) { 
      console.log(fileInputRef.current.files[0])
      const data = new FormData();
      data.append("file", fileInputRef.current.files[0]);
      data.append("upload_preset", "fiverr");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dndcersc4/upload",
        data,
        { withCredentials: false }
      );
      const requestBody = {
        fileUrl: res.data.url,
        fileName: res.data.original_filename,
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
            <option value="financials">Financials</option>
            <option value="pitchdeck">Pitch Deck</option>
            <option value="legal">Legal</option>
            <option value="update">Update</option>
            <option value="kycdetails">KYC Details</option>
            <option value="business">Business</option>
          </select>
          {folder && (
            <>
              <input type="file" ref={fileInputRef}/>
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
