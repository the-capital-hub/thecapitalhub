import { useState } from "react";
import "./UploadModal.scss";

const UploadModal = ({ onCancel }) => {
  const [folder, setFolder] = useState("");



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
            <option value="Financials">Financials</option>
            <option value="Pitch">Pitch Deck</option>
            <option value="Leg">Legal</option>
            <option value="Financials">Update</option>
            <option value="Financials">KYC Details</option>
            <option value="Financials">Business</option>
          </select>
          {folder && <input type="file" />}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
