import { BsFillCloudUploadFill } from "react-icons/bs";
import "./AddModalContent.scss";
import { useState } from "react";
import { getBase64 } from "../../../utils/getBase64";
import {
  addStartupInvested,
  addMyInterest,
} from "../../../Service/user";
import { useSelector } from "react-redux";
import SpinnerBS from "../../Shared/Spinner/SpinnerBS";
import { useRef } from "react";

export default function AddModalContent({ isInterests = false, setInvestedStartups, setMyInterests }) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [interestLogo, setInterestLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyImage: "",
    name: "",
    description: "",
    equity: "",
    ask: "",
    commitment: "",
  });
  const closeButton = useRef();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (isInterests) {
        const logo = await getBase64(interestLogo);
        const newInterestData = {
          logo: logo,
          name: formData.name,
          ask: formData.ask,
          commitment: formData.commitment,
          investedEquity: formData.equity,
        };
        const response = await addMyInterest(
          loggedInUser?.investor,
          newInterestData
        );
        console.log(response.data.myInterests);
        setMyInterests(response.data.myInterests);
      } else {
        const logo = await getBase64(formData.companyImage);
        const newStartUpData = {
          logo: logo,
          name: formData.name,
          description: formData.description,
          investedEquity: formData.equity,
        };
        const response = await addStartupInvested(
          loggedInUser?.investor,
          newStartUpData
        );
        setInvestedStartups(response.data.startupsInvested);
        closeButton.current.click();
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleInterestLogo = (e) => {
    setInterestLogo(e.target.files[0]);
  }

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    console.log(name);
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  return (
    <div className="d-flex flex-column gap-3">
      <div className="border rounded-4 p-3">
        <h5 className="green_underline">Add new: </h5>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          {isInterests ? (
            <div className="upload__image mt-4">
              <input
                type="file"
                name="interestLogo"
                id="interestLogo"
                accept="image/*"
                className="visually-hidden"
                onChange={handleInterestLogo}
              />
                <label htmlFor="interestLogo" className="text-black fw-lighter">
              <div className="upload__label p-2">
                <BsFillCloudUploadFill
                  style={{
                    fontSize: "1.5rem",
                    color: "rgba(140, 90, 201, 1)",
                  }}
                />
                  <p>Upload Image</p>
                  {interestLogo && (
                    <img
                      src={URL.createObjectURL(interestLogo)
                      }
                      alt="Selected Image"
                      style={{ maxWidth: "100%", maxHeight: "70px" }}
                    />
                  )}
              </div>
                </label>
            </div>
          ) : (
            <div className="upload__image mt-4">
              <input
                type="file"
                name="companyImage"
                id="companyImage"
                accept="image/*"
                className="visually-hidden"
                onChange={handleInputChange}
              />
                <label htmlFor="companyImage" className="text-black fw-lighter">
              <div className="upload__label p-2">
                <BsFillCloudUploadFill
                  style={{
                    fontSize: "1.5rem",
                    color: "rgba(140, 90, 201, 1)",
                  }}
                />
                  <p>Upload Image</p>
                  {formData.companyImage && (
                    <img
                      src={URL.createObjectURL(formData.companyImage)
                      }
                      alt="Selected Image"
                      style={{ maxWidth: "100%", maxHeight: "70px" }}
                    />
                  )}
              </div>
                </label>
            </div>
          )}
          <div className="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder={`company name...`}
              className="p-2 w-100 rounded-3 modal__input"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <textarea
              name={`${isInterests ? "ask" : "description"}`}
              id={`${isInterests ? "ask" : "description"}`}
              rows={4}
              className="p-2 w-100 rounded-3 modal__input"
              placeholder={`${isInterests ? "ask..." : "description..."}`}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {isInterests ? (
            <div className="">
              <input
                type="text"
                name="commitment"
                id="commitment"
                placeholder={`commitment...`}
                className="p-2 w-100 rounded-3 modal__input"
                onChange={handleInputChange}
              />
            </div>
          ) : (
            ""
          )}

          <div className="">
            <input
              type="number"
              name="equity"
              id="equity"
              min={0}
              max={100}
              placeholder={`equity...`}
              className="p-2 w-100 rounded-3 modal__input"
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="green_button w-auto mx-auto fs-6"
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
        </form>
        <button data-bs-dismiss="modal" style={{ display: "none" }} ref={closeButton}></button>
      </div>
    </div>
  );
}
