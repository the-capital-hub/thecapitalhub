import React from "react";
import AddUserIconBlack from "../../../../Images/investorIcon/Add-UserBlack.svg";
import AfterSuccessPopup from "../../../PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import InvestorAfterSuccessPopUp from "../../../PopUp/InvestorAfterSuccessPopUp/InvestorAfterSuccessPopUp";
import "./recommendation.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  getRecommendations,
  sentConnectionRequest,
} from "../../../../Service/user";
import { Link } from "react-router-dom";
import { setRecommendations } from "../../../../Store/features/user/userSlice";

const RecommendationCard = ({ isInvestor, maxCount = 5 }) => {
  // Fetch Global states
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const recommendations = useSelector((state) => state.user.recommendations);
  const dispatch = useDispatch();

  // const [users, setUsers] = useState(recommendations);
  const [loading, setLoading] = useState(false);
  const [connectionSent, setConnectionSent] = useState(false);

  // Fetch recommendations
  useEffect(() => {
    if (recommendations === null) {
      setLoading(true);
      getRecommendations(loggedInUser._id)
        .then(({ data }) => {
          // setUsers(data.slice(0, 5));
          dispatch(setRecommendations(data.slice(0, 5)));
          setLoading(false);
        })
        .catch(() => {
          dispatch(setRecommendations({}));
          setLoading(false);
          // setUsers({})
        });
    }
  }, [dispatch, loggedInUser._id, recommendations]);

  // Handle connect
  const handleConnect = (userId) => {
    sentConnectionRequest(loggedInUser._id, userId)
      .then(({ data }) => {
        setConnectionSent(!connectionSent);
        setTimeout(() => setConnectionSent((prev) => !prev), 2500);

        // Set loading to true
        setLoading(true);
        getRecommendations(loggedInUser._id)
          .then(({ data }) => {
            // setUsers(data.slice(0, 5));
            dispatch(setRecommendations(data.slice(0, 5)));
            setLoading(false);
          })
          .catch(() => {
            dispatch(setRecommendations({}));
            setLoading(false);
            // setUsers({})
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="recommendation_main_container">
        <div className="col-12 recommendation_card">
          <div className="card mt-2 right_view_profile_card right_view_profile">
            <div className="card-header">
              <div className="title">
                <span>Recommendation</span>
              </div>
            </div>

            {loading ? (
              <div className="d-flex justify-content-center my-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {recommendations && recommendations.length > 0 ? (
                  recommendations.slice(0, maxCount).map((user, i) => (
                    <div className="card_wrapper" key={i}>
                      <div className="card-body recommendation_card_body">
                        <Link
                          to={
                            isInvestor
                              ? `/investor/user/${user?.firstName.toLowerCase() + "-" + user?.lastName.toLowerCase()}`
                              : `/user/${user?.firstName.toLowerCase() + "-" + user?.lastName.toLowerCase()}`
                          }
                          state={{ userId: user?._id }}
                          className="rounded-circle"
                        >
                          <img
                            src={user.profilePicture}
                            alt="img"
                            className="rounded-circle"
                            style={{ objectFit: "cover" }}
                          />
                        </Link>
                        <div className="recommendation_card_text">
                          <h3>
                            {user.firstName} {user.lastName}
                          </h3>
                          {user.designation && (
                            <h4 className="smallest_typo">
                              {user.designation}
                            </h4>
                          )}
                        </div>
                        <button
                          className="btn connect_button"
                          onClick={() => handleConnect(user._id)}
                        >
                          <img src={AddUserIconBlack} alt="add user" />
                          <span>Connect</span>
                        </button>
                      </div>
                      {/* <hr className="hr" /> */}
                    </div>
                  ))
                ) : (
                  <p className="card-body">No Recommendations</p>
                )}
              </>
            )}
          </div>
          {connectionSent && !isInvestor && (
            <AfterSuccessPopup
              withoutOkButton
              onClose={() => setConnectionSent(!connectionSent)}
              successText="Connection Sent Successfully"
            />
          )}
          {connectionSent && isInvestor && (
            <InvestorAfterSuccessPopUp
              withoutOkButton
              onClose={() => setConnectionSent(!connectionSent)}
              successText="Connection Sent Successfully"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RecommendationCard;
