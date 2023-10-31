import React, { useEffect, useRef } from "react";
import "./MyInvestmentCard.scss";
import InvestedIcon from "../../../../Images/investorIcon/Ellipse 192.svg";
import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { getInvestorById, postInvestorData, uploadLogo } from "../../../../Service/user";
import { getBase64 } from "../../../../utils/getBase64";
import SpinnerBS from "../../../../components/Shared/Spinner/SpinnerBS";

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

  // Pass updated currCompany to EditModalContent.jsx
  const handleSave = async (currCompany) => {
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

  }

  return (
    <div className="investment-card-container border rounded-4 position-relative">
      <div className="d-flex flex-column py-2 px-3 border-bottom ">
        <div className="left">
          {/* Logo */}
          {!editMode ? (
            <img src={currCompany?.logo} alt="Logo" className="logo" />
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
              className={`m-0 mt-2 ${editMode ? "d-none" : "d-block"} `}
              style={{ color: "rgba(74, 74, 74, 1)" }}
            >
              {currCompany?.description}
            </p>
            {/* Description input */}
            <textarea
              id="description"
              name="description"
              rows={6}
              value={currCompany?.description}
              className={`modal__input mt-2 w-100 rounded-2 p-2  ${editMode ? "d-block" : "d-none"
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
              className={`m-0 ${editMode ? "d-none" : "d-block"}  `}
              style={{ color: "rgba(74, 74, 74, 1)" }}
            >
              {currCompany?.ask}
            </p>
            {/* Interests ask field input */}
            <textarea
              id="ask"
              name="ask"
              rows={3}
              value={currCompany?.ask}
              className={`modal__input mt-2 w-100 rounded-2 p-2 ${editMode ? "d-block" : "d-none"
                } `}
              onChange={(e) => handleInputChange(e, currCompany?.id)}
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
              className={`equity text-decoration-underline ms-2 ${editMode ? "d-none" : ""
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
              className={`modal__input rounded-2 mx-2 p-2 ${editMode ? "" : "d-none"
                }`}
              onChange={(e) => handleInputChange(e, currCompany?.id)}
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
                {currCompany?.commitment}
              </span>
              {/* Interests Commitment input */}
              <input
                type="text"
                name="commitment"
                id="commitment"
                className={`modal__input p-2 mx-1 w-50 rounded-2 ${editMode ? "d-inline" : "d-none"
                  } `}
                value={currCompany?.commitment}
                onChange={(e) => handleInputChange(e, currCompany?.id)}
              />
            </p>
          </div>

          <div className="bottom d-flex align-items-center py-2 px-3 gap-2">
            <img src={InvestedIcon} alt="Image" className="small-image" />
            <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
              Invested:{" "}
              <span
                className={`equity text-decoration-underline ms-2 ${editMode ? "d-none" : ""
                  }`}
              >
                {currCompany?.investedEquity}%
              </span>{" "}
              {/* Interests Equity input */}
              <input
                type="number"
                name="investedEquity"
                id="investedEquity"
                min={0}
                max={100}
                value={currCompany?.investedEquity}
                className={`modal__input rounded-2 mx-2 p-2  ${editMode ? "" : "d-none"
                  }`}
                onChange={(e) => handleInputChange(e, currCompany?.id)}
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
      <button data-bs-dismiss="modal" style={{ display: "none" }} ref={closeButton}></button>

    </div>
  );
};

export default MyInvestmentCard;
