import React, { useEffect, useState } from "react";
import "./HalfbendCard.scss";
import ThreeDot from "../../../../../Images/VerticalBlackThreeDots.svg";
// import folderIcon from "../../../../../Images/Folder.png";
import pdfIcon from "../../../../../Images/PDFIcon.png";
import { getPdfData } from "../../../../../Service/user";
import { useSelector } from "react-redux";
import deleteIcon from "../../../../../Images/post/delete.png";


const HalfbendCard = ({folderName, userId}) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log("user",userId)
  useEffect(() => {
    if (userId) {
      getPdfData(userId, folderName).then((res) => {
        setData(res.data);
        // console.log("data", res);
      });
    } else {
      getPdfData(loggedInUser._id, folderName).then((res) => {
        setData(res.data);
        // console.log("data", res);
      });
    }
  }, [loggedInUser, userId, folderName]);

  const openPdfInNewWindow = (pdfUrl) => {
     console.log("pdfurl---------",pdfUrl)
     window.location.href = pdfUrl;
  };
  const handleDeleteDoc=()=>{
    alert("deleted")
  }

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
          {data?.map((item) => (
            <div
              className="col-md-4 d-flex justify-content-center align-items-center main_col"
              key={item.fileName}
              onClick={() => openPdfInNewWindow(item.fileUrl)}
            >
              <div className="custom-card">
                <img
                  className="mx-3 my-1"
                  src={pdfIcon}
                  height={50}
                  alt="PDF Icon"
                />
              </div>
              <div className="d-flex flex-column mx-auto justify-content-center align-items-center">
              <h6 >{item.fileName}</h6>
              <img
                  className="delete-img"
                  src={deleteIcon}
                  height={50}
                  alt="deleteIcon"
                  onClick={() => handleDeleteDoc(item.fileUrl)}
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HalfbendCard;
