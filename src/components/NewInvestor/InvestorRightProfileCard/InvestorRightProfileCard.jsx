import "./investorRightProfileCard.scss";
// import profilePic from "../../../../Images/investorIcon/profilePic.webp";
import LoopIcon from "../../../Images/investorIcon/LoopIcon.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RightProfileCard = ({ noProfile }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [investor, setInvestor] = useState(null);
  //   useEffect(() => {
  //     if(loggedInUser?.investor) {
  //       getInvestorById(loggedInUser?.investor).then(({data}) => {
  //         setInvestor(data);
  //       });
  //     }
  //   }, [loggedInUser]);

  return (
    <>
      <div className="col-12 investor_profile_container">
        <div className="view_profile">
          <div className="view_profile_name_section mt-2">
            <img
              src={loggedInUser.profilePicture}
              style={{ width: "100px", height: "100px" }}
              className="rounded-circle"
              alt="profileimage"
            />
            <div className="right_profile_text flex_content">
              <h2 className="typography">
                {loggedInUser?.firstName} {loggedInUser?.lastName}
              </h2>
              <span className="smallest_typo">{loggedInUser?.email}</span>
              <span className="smallest_typo">
                {`${loggedInUser?.designation} at ${
                  loggedInUser?.startUp?.company || investor?.companyName
                }`}
              </span>
            </div>
            <Link to="/investor/profile" className="profile_btn mt-2 investor__green">
              View Profile
            </Link>

            <Link
              to="/investor/manage-account"
              className="profile_btn mt-1 investor__green"
            >
              Manage Account
            </Link>
            {/* loop */}
            {/* <div className="card mt-2 right_view_profile_card right_loop_card ">
              <div className="card-header">
                <div className="loop_title">
                  <span>Loop</span>
                  <span style={{ fontSize: "10px" }}>
                    -Your Virtual Assistant
                  </span>
                </div>
                <img src={LoopIcon} alt="loop" />
              </div>
              <div className="card-body">

                <div className="input-group">
                <h5 className="card-title">How can I help you today?</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message and loop me in"
                  />
                  <button className="btn-primary send-button" type="button">
                    send
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightProfileCard;
