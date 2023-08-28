import React, { useState } from "react";
import "./TeamCard.scss";
import PramodSq from "../../../../../Images/Pramod.jpeg";
import { useSelector } from "react-redux";
import { postStartUpData } from "../../../../../Service/user";

const TeamCard = ({ index, profile, name, designation, page, company }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [editedName, setEditedName] = useState(name);
  const [editedDesignation, setEditedDesignation] = useState(designation);

  const handleUpdate = () => {
    const updatedTeam = [...company.team];
    updatedTeam[index - 1] = {
      ...updatedTeam[index - 1],
      name: editedName,
      designation: editedDesignation,
    };
    const updatedCompany = { ...company, team: updatedTeam };

    postStartUpData({
      ...updatedCompany,
      founderId: loggedInUser._id,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="col-md-5 col-lg-5 col-xl-4 mx-1" key={index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Team {index}</h5>
            <img src={profile} alt="image" style={{height:"120px", width:"120px"}} />
            <div className="company_text">
              {page === "oneLinkEdit" ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    onBlur={handleUpdate}
                  />
                  <hr />
                  <input
                    type="text"
                    value={editedDesignation}
                    onChange={(e) => setEditedDesignation(e.target.value)}
                    onBlur={handleUpdate}
                  />
                  <hr />
                </>
              ) : (
                <>
                  <h6>{name}</h6>
                  <hr />
                  <h6>{designation}</h6>
                  <hr />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
