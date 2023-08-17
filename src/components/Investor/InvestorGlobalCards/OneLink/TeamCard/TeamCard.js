import React from "react";
import "./TeamCard.scss";
import PramodSq from "../../../../../Images/PramodSqare.png";

const TeamCard = ({index, profile, name, designation}) => {
  const cardData = [
    {
      title: "team",
      content: "Enter the problem statement your startup is addressing",
    },
    {
      title: "team2",
      content: "Enter the solution your startup is offering",
    },
    { title: "team3", content: "Mention your competitors" },
    { title: "team4", content: "Your startup’s revenue model" },
    { title: "team5", content: "Your Growth startegy" },
    { title: "team6", content: "Your Market traction" },
    // { title: "7.Business Model", content: "Your Business Model" },
  ];
  return (
    <>
      <div className="row team_card_container">
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Team {index}</h5>
                <img src={PramodSq} alt="image" />
                <div className="company_text">
                  <h6>{name} </h6>
                  <hr />
                  <h6>{designation}</h6>
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
