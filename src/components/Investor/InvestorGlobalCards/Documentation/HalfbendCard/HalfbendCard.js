import React, { useEffect, useState } from "react";
import "./HalfbendCard.scss";
// import ThreeDot from "../../../../../Images/VerticalBlackThreeDots.svg";
// import folderIcon from "../../../../../Images/Folder.png";
//import pdfIcon from "../../../../../Images/PDFIcon.png";
import { BiSolidFilePdf } from "react-icons/bi";
import { getPdfData, deleteDocument } from "../../../../../Service/user";
import { useSelector } from "react-redux";
// import deleteIcon from "../../../../../Images/post/delete.png";
import { MdDelete } from "react-icons/md";

import AfterSuccessPopup from "../../../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import SpinnerBS from "../../../../Shared/Spinner/SpinnerBS";
// import axios from "axios";

const HalfbendCard = ({ folderName, userId }) => {
  const [data, setData] = useState([]);
  // const [user, setUser] = useState([]);
  const [deleteDoc, setDeleteDoc] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(window.location.href.split("/")[3]);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log("user", userId);
  useEffect(() => {
    setLoading(true);
    if (userId !== undefined) {
      getPdfData(userId, folderName)
        .then((res) => {
          setData(res.data);
          // console.log("data", res);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error.message);
        });
    } else {
      getPdfData(loggedInUser?.oneLinkId, folderName)
        .then((res) => {
          setData(res.data);
          // console.log("data", res);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);

          console.error(error.message);
        });
    }
  }, [loggedInUser, userId, folderName, deleteDoc]);

  const openPdfInNewWindow = (fileUrl) => {
    //  console.log("pdfurl---------",pdfUrl)
    //  window.location.href = pdfUrl;

    //  fetch(fileUrl)
    //  .then((response) => {
    //    if (!response.ok) {
    //      throw new Error('Network response was not ok');
    //    }
    //    return response.blob();
    //  })
    //  .then((blob) => {
    //    const blobUrl = URL.createObjectURL(blob);
    //    const newWindow = window.open(blobUrl, '_blank');
    //    if (!newWindow) {
    //      alert('Failed to open the image in a new window. Please allow pop-ups for this site.');
    //    }
    //  })
    //  .catch((error) => {
    //    console.error('Error fetching image:', error);
    //  });;

    let newWindow = window.open();

    newWindow.location = fileUrl;
  };

  const handleDeleteDoc = (id) => {
    try {
      deleteDocument(id).then((res) => {
        console.log(res);
        setDeleteDoc(true);
      });
    } catch (error) {
      console.log("Error in delete document:", error.response.data.message);
    }
  };
  console.log(data[0]);
  return (
    // <div className="half_bend_container">
    //   <div className="box_container mt-4">
    //     <div className="row">
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="half_bend_container row">
      <div className="box_container mt-4">
        <div className="row">
          {loading && (
            <SpinnerBS
              className={
                "d-flex py-5 justify-content-center align-items-center w-100"
              }
            />
          )}

          {!loading &&
            data?.map((item,index) => (
              <div
                className="col-md-4 d-flex justify-content-center align-items-center main_col "
                key={item.fileName}
                style={{ maxWidth: "300px", width: "100%", padding: "1rem" }}
              >
                <div
                  className="custom-card"
               
                  style={{ width: "100%" }}
                >
                  <img
                    src={item.fileUrl}
                    onClick={() => openPdfInNewWindow(item.fileUrl)}
                    //height={50}
                    alt="PDF Icon"
                    style={{ width: "100%",height:"10rem" }}
                  />
                  <div className="d-flex mx-auto" style={{alignItems:"center",padding:"0.5rem 0",justifyContent:"space-between"}}>
                  <BiSolidFilePdf size={20} color="#f34646"/>
                    <h6 style={{marginBottom:0}}>
                      {/*{item.fileName.length > 15
                        ? `${item.fileName.substring(0, 15)}...`
                        : item.fileName}*/}
                        {`${folderName}_0${index+1}`}
                    </h6>
                    {loggedInUser?._id === item.userId &&
                      window.location.href.split("/")[3] ===
                        "documentation" && (
                        // <img
                        //   className="delete-img"
                        //   src={deleteIcon}
                        //   height={50}
                        //   alt="deleteIcon"
                        //   onClick={() => handleDeleteDoc(item._id)}
                        // />
                        <MdDelete
                          size={20}
                          color="#f34646"
                        style={{cursor:"pointer"}}
                          onClick={() => handleDeleteDoc(item._id)}
                        />
                      )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {deleteDoc && (
        <AfterSuccessPopup
          withoutOkButton
          onClose={() => setDeleteDoc(!deleteDoc)}
          successText="Document Deleted Successfully"
        />
      )}
    </div>
  );
};

export default HalfbendCard;
