import { useState, useRef, useEffect } from "react";
import "./UploadModal.scss";
import axios from "axios";
import { environment } from "../../../../environments/environment";
import AfterSuccessPopUp from "../../../PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import { useSelector } from "react-redux";
import { s3 } from "../../../../Service/awsConfig";
import IconDelete from "../../SvgIcons/IconDelete";
import { getFoldersApi, addNotificationAPI } from "../../../../Service/user";
import { getBase64 } from "../../../../utils/getBase64";

const baseUrl = environment.baseUrl;

const UploadModal = ({ onCancel, fetchFolder, notify }) => {
  // Fetch loggedInUser from global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [folder, setFolder] = useState("pitchdeck");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Overall upload progress
  const [showPopUp, setShowPopUp] = useState(false);
  const fileInputRef = useRef(null);

  const [folderName, setFolderName] = useState("");
  const [folderSelector, setFolderSelector] = useState([]);

  useEffect(() => {
    const getFolders = () => {
      getFoldersApi(loggedInUser.oneLinkId)
        .then((data) => {
          const folders = data.data;
          folders.push("New Folder");
          console.log(folders);
          setFolderSelector(folders);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFolders();
  }, []);

  const handleClosePopup = () => {
    setShowPopUp(false);
    onCancel(false);
  };

  const handleFileSelect = (e) => {
    setFiles([...e.target.files]);
  };

  const handleRemoveFile = (index) => {
    const filesCopy = [...files];
    filesCopy.splice(index, 1);
    setFiles(filesCopy);
  };

  function getContentType(fileExtension) {
    const contentTypeMap = {
      txt: "text/plain",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      pdf: "application/pdf",
      pdfxml: "application/vnd.adobe.pdfxml",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    return contentTypeMap[fileExtension] || "application/octet-stream";
  }

  const handlePdfUploadClick = async () => {
    if (files.length === 0) {
      return;
    }

    setLoading(true);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name}`;
      const fileExtension = file.name.split(".").pop();
      //const contentType = getContentType(fileExtension);

      // const params = {
      //   Bucket: "thecapitalhubdocuments",
      //   Key: `documents/${fileName}`,
      //   Body: file,
      //   //uncomment this if you want to display the uploaded documents in separte window
      //   //ContentDisposition: "inline",
      //   //ContentType: contentType,
      // };
      // const uploadRequest = s3.upload(params);
      // uploadRequest.on("httpUploadProgress", (progress) => {
      //   const percent = Math.round((progress.loaded / progress.total) * 100);
      //   setUploadProgress(percent);
      // });

      try {
        // console.log("upload")
        // const res = await uploadRequest.promise();
        // console.log(res,"upload")
        const logo = await getBase64(files[i]);
        
        const requestBody = {
          files: logo,
          fileName: fileName,
          userId: loggedInUser._id,
          folderName: folder === "New Folder" ? folderName : folder,
        };

        await axios
          .post(`${baseUrl}/documentation/uploadDocument`, requestBody)
          // .then((response) => {
          //   fetchFolder();
          //   if (response.status === 200) {
          //     setUploadProgress(0); // Reset progress for the current file
          //     if (i < files.length - 1) {
          //       // If there are more files to upload, show progress for the next file
          //       setUploadProgress(0);
          //     }
          //     if (response.data.isFirst) {
          //       notify();
          //       const notificationBody = {
          //         recipient: loggedInUser._id,
          //         type: "achievementCompleted",
          //         achievementId: "656468a249186bca517cd0d3",
          //       }
          //       addNotificationAPI(notificationBody)
          //         .then((data) => console.log("Added"))
          //         .catch((error) => console.error(error.message));
          //     }
          //   }

          // })
          // .catch((error) => {
          //   console.error("Error uploading file:", error);
          //   return
          // });
      } catch (error) {
        console.error("Error uploading file to S3:", error);
        alert("Failed to Upload files");
        return
      }
    }

    setLoading(false);
    setShowPopUp(true);
    setFiles([]);
  };

  // Render File list
  const renderFileList = () => (
    <ol className="list-group list-group-numbered">
      {[...files].map((file, index) => {
        return (
          <div
            role="button"
            className="list-group-item list-group-item-action file_list_button d-flex align-items-center "
            key={index}
          >
            <p className="text-start uploaded_file_name m-0 lh-1">
              {file.name}
            </p>{" "}
            <button
              type="button"
              className="btn border-0 ms-auto m-0 p-0"
              onClick={(e) => handleRemoveFile(e, index)}
            >
              <IconDelete />
            </button>
          </div>
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

          {/* <select
            onChange={(e) => setFolder(e.target.value)}
            name="Folder"
            id=""
          >
            <option value="pitchdeck">Pitch Deck</option>
            <option value="business">Business</option>
            <option value="kycdetails">KYC Details</option>
            <option value="legal and compliance">Legal and Compliance</option>
            <option value="Other">Other</option>

          </select> */}
          <select
            onChange={(e) => setFolder(e.target.value)}
            name="Folder"
            id=""
          >
 {folderSelector?.map((item, index) => {
  let pageTitle;

  switch (item) {
    case "Legal and compliance":
      pageTitle = "Legal and Compliance";
      break;
    case "pitchdeck":
      pageTitle = "Pitch Deck";
      break;
    case "kycdetails":
      pageTitle = "KYC Details";
      break;
    case "business":
      pageTitle = "Business";
      break;
    default:
      pageTitle = item;
      break;
  }

  // Wrap the return statement in the map callback
  return (
    <option key={index} value={item}>
      {pageTitle}
    </option>
  );
})}

            {/* <option value="Other">Other</option> */}
          </select>

          {folder === "New Folder" && (
            <input
              className="name_input rounded-pill px-3 py-2 "
              type="text"
              placeholder="Enter folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          )}

          {folder && (
            <>
              <div className="position-relative d-flex flex-column flex-lg-row align-items-center">
                <div className="">
                  <input
                    type="file"
                    id="files"
                    ref={fileInputRef}
                    multiple
                    accept=".txt, .png, .jpg, .jpeg, .pdf, .pdfxml, .docx, .xlsx"
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
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div
              className="progress"
              role="progressbar"
              aria-label="Upload Progress"
              aria-valuenow={uploadProgress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg_orange"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress}% Complete
              </div>
            </div>
          )}
          {loading && (
            <div class="d-flex justify-content-center my-4">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
      { }
      {showPopUp && (
        <AfterSuccessPopUp savedFile={true} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default UploadModal;
