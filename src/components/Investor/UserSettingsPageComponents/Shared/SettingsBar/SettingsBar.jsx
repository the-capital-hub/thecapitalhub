import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./SettingsBar.scss";

export default function SettingsBar({ text, entry }) {
  function handleClick() {}

  return (
    <div className="settings-bar d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between flex-grow-1">
        <p className="m-0">{text}</p>
        <p className="m-0">{entry}</p>
      </div>
      <button
        type="button"
        className="btn border-0 setting-btn"
        onClick={handleClick}
      >
        <FaArrowRight size={25} />
      </button>
    </div>
  );
}
