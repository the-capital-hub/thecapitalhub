import React, { useEffect } from "react";
import "./MyInvestmentCard.scss";
import InvestedIcon from "../../../../Images/investorIcon/Ellipse 192.svg";
import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";

const MyInvestmentCard = ({
  company,
  isInterests = false,
  editMode = false,
  updateCompanies,
}) => {
  // Save company rendered in modal tp state
  const [currCompany, setCurrCompany] = useState(company);

  // Update changes to currCompany
  function handleInputChange(e, id) {
    let value = e.target.value;
    let key = e.target.name;

    if (key === "name") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, name: value };
      });
    } else if (key === "description") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, description: value };
      });
    } else if (key === "equity") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, equity: value };
      });
    } else if (key === "commitment") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, commitment: value };
      });
    }
  }

  // Pass updated currCompany to EditModalContent.jsx
  function handleSave(currCompany) {
    updateCompanies(currCompany);
  }

  return (
    <div className="investment-card-container border rounded-3 position-relative">
      <div className="d-flex flex-column py-2 px-3 border-bottom ">
        <div className="left">
          {/* Logo */}
          {!editMode ? (
            <img src={currCompany.logo} alt="Logo" className="logo" />
          ) : (
            <div className="">
              <label
                htmlFor="logoFile"
                className="upload__label rounded-circle "
                style={{ width: "80px", height: "80px" }}
              >
                <BsFillCloudUploadFill
                  style={{
                    fontSize: "1.5rem",
                    color: "rgba(140, 90, 201, 1)",
                  }}
                />
              </label>
              <input
                type="file"
                name="logoFile"
                id="logoFile"
                accept="image/*"
                className={`visually-hidden`}
              />
            </div>
          )}

          {/* Name */}
          {!editMode ? (
            <p className="text m-0 ms-3">
              <strong className="green_underline">{currCompany.name}</strong>
            </p>
          ) : (
            // Name input
            <input
              type="text"
              name="name"
              defaultValue={currCompany.name}
              className="modal__input ms-3 rounded-2  p-2 "
              onChange={(e) => handleInputChange(e, currCompany.id)}
            />
          )}
        </div>

        {/* Description */}
        {!isInterests ? (
          // Description
          <div className="">
            <p
              className={`m-0 mt-2 ${editMode ? "d-none" : "d-block"} `}
              style={{ color: "rgba(74, 74, 74, 1)" }}
            >
              {currCompany.description}
            </p>
            {/* Description input */}
            <textarea
              id="description"
              name="description"
              rows={6}
              defaultValue={currCompany.description}
              className={`modal__input mt-2 w-100 rounded-2 p-2  ${
                editMode ? "d-block" : "d-none"
              } `}
              onChange={(e) => handleInputChange(e, currCompany.id)}
            />
          </div>
        ) : (
          // Ask
          <div className="para mt-2">
            <p className="m-0 ask__heading ">
              <strong>Ask:</strong>
            </p>
            <p
              className={`m-0 ${editMode ? "d-none" : "d-block"}  `}
              style={{ color: "rgba(74, 74, 74, 1)" }}
            >
              {currCompany.description}
            </p>
            {/* Interests ask field input */}
            <textarea
              id="description"
              name="description"
              rows={3}
              defaultValue={currCompany.description}
              className={`modal__input mt-2 w-100 rounded-2 p-2 ${
                editMode ? "d-block" : "d-none"
              } `}
              onChange={(e) => handleInputChange(e, currCompany.id)}
            />
          </div>
        )}
      </div>

      {/* Equity */}
      {!isInterests ? (
        <div className="bottom d-flex align-items-center py-4 px-3 gap-2 ">
          <img src={InvestedIcon} alt="Image" className="small-image" />
          <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
            Invested:{" "}
            <span
              className={`equity text-decoration-underline ms-2 ${
                editMode ? "d-none" : ""
              }`}
            >
              {currCompany.equity}%
            </span>{" "}
            {/*Investment Equity input */}
            <input
              type="number"
              name="equity"
              id="equity"
              defaultValue={currCompany.equity}
              min={0}
              max={100}
              className={`modal__input rounded-2 mx-2 p-2 ${
                editMode ? "" : "d-none"
              }`}
              onChange={(e) => handleInputChange(e, currCompany.id)}
            />
            <strong>Equity</strong>
          </p>
        </div>
      ) : (
        <div className="">
          <div className="d-flex align-items-center py-2 px-3 border-bottom">
            {/* Interests Commitment */}
            <p className={`m-0`}>
              <strong>My Commitment:</strong>{" "}
              <span className={`${editMode ? "d-none" : ""}`}>
                {currCompany.commitment}
              </span>
              {/* Interests Commitment input */}
              <input
                type="text"
                name="commitment"
                id="commitment"
                className={`modal__input p-2 mx-1 w-50 rounded-2 ${
                  editMode ? "d-inline" : "d-none"
                } `}
                defaultValue={currCompany.commitment}
                onChange={(e) => handleInputChange(e, currCompany.id)}
              />
            </p>
          </div>

          <div className="bottom d-flex align-items-center py-2 px-3 gap-2">
            <img src={InvestedIcon} alt="Image" className="small-image" />
            <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
              Invested:{" "}
              <span
                className={`equity text-decoration-underline ms-2 ${
                  editMode ? "d-none" : ""
                }`}
              >
                {currCompany.equity}%
              </span>{" "}
              {/* Interests Equity input */}
              <input
                type="number"
                name="equity"
                id="equity"
                min={0}
                max={100}
                defaultValue={currCompany.equity}
                className={`modal__input rounded-2 mx-2 p-2  ${
                  editMode ? "" : "d-none"
                }`}
                onChange={(e) => handleInputChange(e, currCompany.id)}
              />
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
