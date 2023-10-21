import React, { useEffect, useState } from "react";
import "./ConnectionCard.scss";
import testimg from "../../../Images/aboutUs/Pramod.jpeg";
import { getUserConnections } from "../../../Service/user";
import { useNavigate } from "react-router-dom";

function ConnectionCard({ userId }) {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUserConnections(userId)
      .then((data) => {
        setConnections(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="ConnectionCard_container m-3 pb-2 d-flex flex-md-row justify-content-start gap-4">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : connections.length > 0 ? (
        <>
          {connections.map((item, index) => (

            <div className="single-card d-flex flex-column align-items-center justify-content-between" key={index}>
              <div onClick={() => navigate(`/user/${item._id}`)}>
                <img src={item?.profilePicture} alt="" className="rounded-pill" />
                <h1 className="mt-2">{item?.firstName} {item?.lastName}</h1>
                <p className="mb-2">{item?.designation}</p>
                <button>Connected</button>
              </div>
            </div>

          ))}
        </>
      ) : (
        <p>No connections found.</p>
      )
      }
    </div >
  );
}

export default ConnectionCard;

