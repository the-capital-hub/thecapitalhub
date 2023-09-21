import React from "react";
import "./MyInvestmentCard.scss";
import InvestedIcon from "../../../../Images/investorIcon/Ellipse 192.svg";
import { useState } from "react";

const MyInvestmentCard = ({ company, isInterests = false, setCompanies }) => {
  const [editMode, setEditMode] = useState(false);
  const [currCompany, setCurrCompany] = useState(company);

  function handleNameChange(e, id) {
    let value = e.target.value;

    let newCompanyData = { ...company, name: value };
    console.log(newCompanyData);

    setCurrCompany(newCompanyData);
  }

  function handleSave(currCompany) {
    setEditMode(false);

    setCompanies((prevCompanies) => {
      let companiesList = prevCompanies.map((company, index) => {
        if (company.id === currCompany.id) {
          return { ...currCompany };
        }
        return company;
      });

      console.log(companiesList);
      return companiesList;
    });
  }

  return (
    <div className="investment-card-container border rounded-3 position-relative">
      <div className="d-flex flex-column py-2 px-3 border-bottom ">
        <div className="left">
          <img src={company.logo} alt="Logo" className="logo" />

          {!editMode ? (
            <p
              className="text m-0 ms-3"
              onDoubleClick={() => setEditMode(!editMode)}
            >
              <strong className="green_underline">{company.name}</strong>
            </p>
          ) : (
            <input
              type="text"
              name="name"
              defaultValue={company.name}
              className="modal__input"
              onChange={(e) => handleNameChange(e, company.id)}
            />
          )}
        </div>
        {!isInterests ? (
          <p className="m-0 mt-2 " style={{ color: "rgba(74, 74, 74, 1)" }}>
            {company.description}
          </p>
        ) : (
          <div className="para mt-2">
            <p className="m-0 ask__heading ">
              <strong>Ask:</strong>
            </p>
            <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
              {company.description}
            </p>
          </div>
        )}
      </div>

      {!isInterests ? (
        <div className="bottom d-flex align-items-center py-4 px-3 gap-2 ">
          <img src={InvestedIcon} alt="Image" className="small-image" />
          <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
            Invested:{" "}
            <span className="equity text-decoration-underline ms-2 ">
              {company.equity}%
            </span>{" "}
            <strong>Equity</strong>
          </p>
        </div>
      ) : (
        <div className="">
          <div className="d-flex align-items-center py-2 px-3 border-bottom">
            <p className="m-0">
              <strong>My Commitment:</strong> EA
            </p>
          </div>
          <div className="bottom d-flex align-items-center py-2 px-3 gap-2">
            <img src={InvestedIcon} alt="Image" className="small-image" />
            <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
              Invested:{" "}
              <span className="equity text-decoration-underline ms-2 ">
                {company.equity}%
              </span>{" "}
              <strong>Equity</strong>
            </p>
          </div>
        </div>
      )}

      {editMode ? (
        <button
          className="green_button save__button position-absolute start-50 translate-middle-x "
          onClick={() => handleSave(currCompany)}
        >
          Save
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyInvestmentCard;
