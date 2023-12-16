import React, { useRef } from "react";
import { useSelector } from "react-redux";
import SpinnerBS from "../../../../../../Shared/Spinner/SpinnerBS";

export default function InfoField({ isEditing, data, name, legend, loading }) {
  const isMobileView = useSelector((state) => state.design.isMobileView);

  const textRef = useRef();

  //  Handle Info Change
  function handleInfoChange(e) {
    // const { name, value } = e.target;

    // Resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + 2 + "px";
  }

  return (
    <fieldset className="d-flex flex-column">
      <legend>{legend}</legend>
      {isEditing || !data ? (
        <textarea
          defaultValue={data === "" ? null : data}
          placeholder="Add your answer"
          name={name}
          onChange={handleInfoChange}
          className="profile_edit_field w-100"
          rows={isMobileView ? 5 : 3}
          ref={textRef}
          style={{ resize: "none" }}
        />
      ) : (
        <p
          className="text-secondary"
          data-empty={data === "" || !data ? true : false}
        >
          {data || "Click on edit to add Investment Philosophy"}
        </p>
      )}
      {!data && !isEditing && (
        <button type="submit" className="ms-auto mt-3 btn btn-investor">
          {loading && textRef.current.value !== "" ? (
            <SpinnerBS spinnerSizeClass="spinner-border-sm text-black" />
          ) : (
            "Save"
          )}
        </button>
      )}
    </fieldset>
  );
}
