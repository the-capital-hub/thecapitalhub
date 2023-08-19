import React from "react";
import "./TeamCard.scss";
import PramodSq from "../../../../../Images/PramodSqare.png";
import { useSelector } from "react-redux";
import { postStartUpData } from "../../../../../Service/user";

const TeamCard = ({ index, profile, name, designation, page, company }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const handleUpdate = (field, event) => {
    const updatedValue = event.target.value;
    if(!updatedValue) return;
    company.team[index - 1][field] = updatedValue;
    postStartUpData({
      ...company,
      founderId: loggedInUser._id,
    })
      .then(({ data }) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="row team_card_container">
        <div className="col-md-4" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Team {index}</h5>
              <img src={PramodSq} alt="image" />
              <div className="company_text">
                {page === "oneLinkEdit" ? (
                  <input placeholder={name} 
                  onBlur={(e) => handleUpdate("name", e)}
                  />
                ) : (
                  <h6>{name}</h6>
                )}
                <hr />
                {page === "oneLinkEdit" ? (
                  <input placeholder={designation} 
                  onBlur={(e) => handleUpdate("designation", e)}
                  />
                ) : (
                  <h6>{designation}</h6>
                )}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
