import React, { useEffect, useState } from "react";
import "./ConnectionCard.scss";
import { getUserConnections } from "../../../Service/user";
import { useNavigate } from "react-router-dom";
import SpinnerBS from "../../Shared/Spinner/SpinnerBS";
import { useSelector } from "react-redux";
import { selectLoggedInUserId } from "../../../Store/features/user/userSlice";

function ConnectionCard({ userIdData }) {
  // Fetch from store
  const userId = useSelector(selectLoggedInUserId);

  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUserConnections(userId || userIdData)
      .then((data) => {
        setConnections(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [userId, userIdData]);

  return (
    <div className="ConnectionCard_container m-3 pb-2 d-flex flex-md-row justify-content-start gap-4">
      {loading ? (
        <SpinnerBS
          className={
            "d-flex justify-content-center align-items-center w-100 py-5"
          }
          colorClass={"d-l-grey"}
        />
      ) : connections.length > 0 ? (
        <>
          {connections.map((item, index) => (
            <div className="single-card " key={index}>
              <div
                className="d-flex flex-column align-items-center justify-content-between gap-3 h-100"
                onClick={() => navigate(`/user/${item._id}`)}
              >
                <img
                  src={item?.profilePicture}
                  alt=""
                  className="rounded-pill"
                />
                <h1 className="m-0" style={{ minHeight: "50px" }}>
                  {item?.firstName} {item?.lastName}
                </h1>
                <p className="m-0">{item?.designation}</p>
                <button className="mt-auto px-3">Connected</button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-secondary">No connections found.</p>
      )}
    </div>
  );
}

export default ConnectionCard;
