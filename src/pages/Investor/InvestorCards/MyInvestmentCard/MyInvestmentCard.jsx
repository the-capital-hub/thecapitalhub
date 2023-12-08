import React, { useEffect, useRef } from "react";
import "./MyInvestmentCard.scss";
import InvestedIcon from "../../../../Images/investorIcon/Ellipse 192.svg";
import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  getInvestorById,
  postInvestorData,
  uploadLogo,
} from "../../../../Service/user";
import { getBase64 } from "../../../../utils/getBase64";
import SpinnerBS from "../../../../components/Shared/Spinner/SpinnerBS";

const commitmentOptions = ["N.A", "Soft commitment", "Due diligence phase"];

const MyInvestmentCard = ({
  company,
  isInterests = false,
  editMode = false,
  updateCompanies,
  index,
  setInvestedStartups,
  setMyInterests,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  // Save company rendered in modal tp state
  const [currCompany, setCurrCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  const closeButton = useRef();

  useEffect(() => {
    setCurrCompany(company);
  }, [company]);
  // Update changes to currCompany
  function handleInputChange(e, id) {
    let value = e.target.value;
    let key = e.target.name;
    if (key === "logoFile") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, logo: e.target.files[0] };
      });
    }
    if (key === "name") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, name: value };
      });
    } else if (key === "description") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, description: value };
      });
    } else if (key === "investedEquity") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, investedEquity: value };
      });
    } else if (key === "commitment") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, commitment: value };
      });
    } else if (key === "ask") {
      setCurrCompany((prevCurrCompany) => {
        return { ...prevCurrCompany, ask: value };
      });
    }
  }

  // Handle commitment select
  function handleCommitmentSelect(e, option) {
    setCurrCompany((prevCurrCompany) => {
      return { ...prevCurrCompany, commitment: option };
    });
  }

  // Pass updated currCompany to EditModalContent.jsx
  const handleSave = async (currCompany) => {
    if (currCompany.description && currCompany.description.length > 400) {
      alert("Maximum allowed characters for description is 400.");
      return;
    }
    setLoading(true);

    try {
      if (isInterests) {
        console.log(currCompany);
        console.log(index);
        const { data: investor } = await getInvestorById(
          loggedInUser?.investor
        );
        const editMyInterests = investor.myInterests[index];
        editMyInterests.name = currCompany.name;
        editMyInterests.ask = currCompany.ask;
        editMyInterests.commitment = currCompany.commitment;
        editMyInterests.investedEquity = currCompany.investedEquity;
        if (currCompany.logo instanceof Blob) {
          const logo = await getBase64(currCompany.logo);
          const { url } = await uploadLogo({ logo });
          editMyInterests.logo = url;
        }
        investor.myInterests[index] = editMyInterests;
        const { data: response } = await postInvestorData(investor);
        setMyInterests(response.myInterests);
      } else {
        const { data: investor } = await getInvestorById(
          loggedInUser?.investor
        );
        const editedStartUp = investor.startupsInvested[index];
        editedStartUp.name = currCompany.name;
        editedStartUp.description = currCompany.description;
        editedStartUp.investedEquity = currCompany.investedEquity;
        if (currCompany.logo instanceof Blob) {
          const logo = await getBase64(currCompany.logo);
          const { url } = await uploadLogo({ logo });
          editedStartUp.logo = url;
        }
        investor.startupsInvested[index] = editedStartUp;
        const { data: response } = await postInvestorData(investor);
        setInvestedStartups(response.startupsInvested);
      }
      closeButton.current.click();
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="investment-card-container border rounded-4 position-relative d-flex flex-column">
      <div className="d-flex flex-column py-2 px-3 border-bottom flex-grow-1">
        <div className="left">
          {/* Logo */}
          {!editMode ? (
            <img src={currCompany?.logo} alt="Logo" className="logo rounded" />
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
                onChange={(e) => handleInputChange(e, currCompany?.id)}
              />
            </div>
          )}

          {/* Name */}
          {!editMode ? (
            <p className="text m-0 ms-3">
              <strong className="green_underline">{currCompany?.name}</strong>
            </p>
          ) : (
            // Name input
            <input
              type="text"
              name="name"
              value={currCompany?.name}
              className="modal__input ms-3 rounded-2  p-2 "
              onChange={(e) => handleInputChange(e, currCompany?.id)}
            />
          )}
        </div>

        {/* Description */}
        {!isInterests ? (
          // Description
          <div className="">
            <p
              className={`m-0 mt-2 text-secondary ${
                editMode ? "d-none" : "d-block"
              } `}
              style={{
                maxHeight: "100px",
                minHeight: "100px",
                overflowY: "auto",
              }}
            >
              {currCompany?.description}
            </p>
            {/* Description input */}
            <textarea
              id="description"
              name="description"
              rows={6}
              value={currCompany?.description}
              className={`modal__input mt-2 w-100 rounded-2 p-2  ${
                editMode ? "d-block" : "d-none"
              } `}
              onChange={(e) => handleInputChange(e, currCompany?.id)}
            />
          </div>
        ) : (
          // Ask
          <div className="para mt-2">
            <p className="m-0 ask__heading ">
              <strong>Ask:</strong>
            </p>
            <p
              className={`m-0 text-secondary ${
                editMode ? "d-none" : "d-block"
              }  `}
            >
              {currCompany?.ask}
            </p>
            {/* Interests ask field input */}
            <textarea
              id="ask"
              name="ask"
              rows={3}
              value={currCompany?.ask}
              className={`modal__input mt-2 w-100 rounded-2 p-2 ${
                editMode ? "d-block" : "d-none"
              } `}
              onChange={(e) => handleInputChange(e, currCompany?.id)}
            />
          </div>
        )}
      </div>

      {/* Equity */}
      {!isInterests ? (
        <div className="bottom d-flex align-items-center py-4 px-3 gap-2 ">
          <img src={InvestedIcon} alt="" className="small-image" />
          <p className="m-0 text-secondary">
            Invested:{" "}
            <span
              className={`equity d-l-grey text-decoration-underline ms-2 ${
                editMode ? "d-none" : ""
              }`}
            >
              {currCompany?.investedEquity}%
            </span>{" "}
            {/*Investment Equity input */}
            <input
              type="number"
              name="investedEquity"
              id="investedEquity"
              value={currCompany?.investedEquity}
              min={0}
              max={100}
              className={`modal__input rounded-2 mx-2 p-2 ${
                editMode ? "" : "d-none"
              }`}
              onChange={(e) => handleInputChange(e, currCompany?.id)}
            />
            <strong>Equity</strong>
          </p>
        </div>
      ) : (
        <div className="">
          <div className="d-flex align-items-center py-2 px-3">
            {/* Interests Commitment */}
            <p className={`m-0`}>
              <strong>My Commitment:</strong>{" "}
              <span className={`${editMode ? "d-none" : ""}`}>
                {currCompany?.commitment}
              </span>
              {/* Interests Commitment input */}
              {/* <input
                type="text"
                name="commitment"
                id="commitment"
                className={`modal__input p-2 mx-1 w-50 rounded-2 ${
                  editMode ? "d-inline" : "d-none"
                } `}
                value={currCompany?.commitment}
                onChange={(e) => handleInputChange(e, currCompany?.id)}
              /> */}
            </p>
            <div
              className={`dropdown ${
                editMode ? "" : "d-none"
              } flex-grow-1 ms-2`}
            >
              <button
                className="btn commitment_form_input dropdown-toggle text-start d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currCompany?.commitment}
              </button>
              <ul className={`dropdown-menu m-0 p-0 w-100`}>
                {commitmentOptions.map((option, index) => {
                  return (
                    <li key={`${option}${index}`} className="m-0 p-0">
                      <button
                        type="button"
                        className={`btn list-btn w-100 text-start ps-3 rounded-0 ${
                          option === currCompany?.commitment ? "selected" : ""
                        }`}
                        onClick={(e) => handleCommitmentSelect(e, option)}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* <div className="bottom d-flex align-items-center py-2 px-3 gap-2">
            <img src={InvestedIcon} alt="" className="small-image" />
            <p className="m-0 text-secondary" >
              Invested:{" "}
              <span
                className={`equity text-decoration-underline ms-2 ${
                  editMode ? "d-none" : ""
                }`}
              >
                {currCompany?.investedEquity}%
              </span>{" "}
              <input
                type="number"
                name="investedEquity"
                id="investedEquity"
                min={0}
                max={100}
                value={currCompany?.investedEquity}
                className={`modal__input rounded-2 mx-2 p-2  ${
                  editMode ? "" : "d-none"
                }`}
                onChange={(e) => handleInputChange(e, currCompany?.id)}
              />
              <strong>Equity</strong>
            </p>
          </div> */}
        </div>
      )}

      {editMode ? (
        <button
          className="btn btn-investor save__button position-absolute start-50 translate-middle-x "
          onClick={() => handleSave(currCompany)}
          // data-bs-dismiss="modal"
        >
          {loading ? (
            <SpinnerBS
              colorClass={"text-dark"}
              spinnerSizeClass="spinner-border-sm"
            />
          ) : (
            "Save"
          )}
        </button>
      ) : (
        ""
      )}
      <button
        data-bs-dismiss="modal"
        style={{ display: "none" }}
        ref={closeButton}
      ></button>
    </div>
  );
};

export default MyInvestmentCard;
