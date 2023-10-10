import React, { useEffect, useState } from "react";
import "./ConnectionCard.scss";
import testimg from "../../../Images/aboutUs/Pramod.jpeg";
import { getUserConnections } from "../../../Service/user";

function ConnectionCard({ userId }) {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    getUserConnections(userId)
      .then((data) => {
        console.log(data.data);
        setConnections(data.data); // Set the connections state here
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ConnectionCard_container m-3 pb-2 d-flex flex-md-row justify-content-start gap-4 ">
     {connections.length > 0 ? (
  <>
    {connections.map((item, index) => (
      <div className="single-card d-flex flex-column align-items-center justify-content-between " key={index}>
        <img src={item?.profilePicture} alt="" className="rounded-pill" />
        <h1 className="mt-2">{item?.firstName} {item?.lastName}</h1>
        <p className="mb-2">{item?.designation}</p>
        <button >Connected</button>
      </div>
    ))}
  </>
) : (
    <div class="d-flex justify-content-center   ">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
)}

    </div>
  );
}

export default ConnectionCard;

