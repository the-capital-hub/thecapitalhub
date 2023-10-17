import React, { useState } from "react";
import "./OnelinkValidation.scss";
import IconReportPost from "../../Investor/SvgIcons/IconReportPost";
import IconPassword from "../../Investor/SvgIcons/IconPassword";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import SpinnerBS from "../Spinner/SpinnerBS";
import { useParams } from "react-router-dom";
import { validateSecretKey } from "../../../Service/user";
import { useDispatch } from 'react-redux';
import { login, logout } from '../../../Store/features/oneLink/oneLinkSlice';

export default function OnelinkValidation({ userId }) {
  const dispatch = useDispatch();
  // States for handling Invalid secret Key
  const [error, setError] = useState(null);
  const [pin, setPin] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { userId } = useParams();

  // Handle invalid Secret Key
  const handleInvalid = (value) => {
    // if value length is 0
    if (value.length === 0) {
      setError(null);
      return;
    }
    // console.log("val-->", value, /[0-9]{4}/.test(value));

    // if value length is < 4
    if (value.length < 4) {
      return;
    }

    // Test for numeric values
    if (!/[0-9]{4}/.test(value)) {
      setError("Please enter Valid 4 digit Key");
      return;
    }

    // Then
    setPin(value);
    setError(null);
  };

  const handlePinSubmit = async (req, res) => {
    try {
      const response = await validateSecretKey(userId, pin);
      if (response.status === 200) {
        const token = response.token;
        dispatch(login({ oneLinkUser: token, oneLinkId: userId }));
      } else {
        setError("Key is invalid");
      }
    } catch (error) {
      console.log(error);
      setError("Key is invalid");
    }
  }

  return (
    <MaxWidthWrapper>
      <div className="onelink_validation_page d-flex justify-content-center align-items-center">
        <div className="key_container bg-white rounded-5 shadow p-3 py-5 p-lg-5 d-flex flex-column gap-5">
          {/* Headings */}
          <div className="">
            <h3 className="orange fw-bold">One Link</h3>
            <h2 className="fw-medium">Enter Secret Key to login</h2>
          </div>

          {/* Key Input */}
          <div className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-between align-items-center secret_input_container shadow-sm">
              <input
                type="password"
                name="pin"
                id="pin"
                minLength={4}
                maxLength={4}
                pattern="[0-9]{4}"
                inputMode="numeric"
                placeholder="Enter secret key here"
                required
                className="secret_input"
                autoComplete="off"
                onChange={(e) => handleInvalid(e.target.value)}
              />
              <IconPassword />
            </div>

            {error && (
              <div className="d-flex gap-1 subtext">
                <IconReportPost
                  color="rgba(253, 89, 1, 1)"
                  height="1.25rem"
                  width="1.25rem"
                />
                <small className="m-0">{error} </small>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 align-self-md-end">
            <button type="button" className="btn_cancel">
              Cancel
            </button>
            <button type="button" className="btn_submit" onClick={handlePinSubmit}>
              {loading ? (
                <span className=" d-flex align-items-center gap-2">
                  <SpinnerBS spinnerSizeClass="spinner-border-sm" />
                  Submit
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
