import React from "react";
import { useSelector } from "react-redux";

export default function InfoField({ isEditing, data, name, legend }) {
  const isMobileView = useSelector((state) => state.design.isMobileView);

  //  Handle Info Change
  function handleInfoChange(e) {
    // const { name, value } = e.target;

    // Resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + 2 + "px";

    //
  }

  return (
    <fieldset className="">
      <legend>{legend}</legend>
      {isEditing || !data ? (
        <textarea
          defaultValue={data || "Add your answer"}
          name={name}
          onChange={handleInfoChange}
          className="profile_edit_field w-100"
          rows={isMobileView ? 5 : 3}
        />
      ) : (
        <p className="text-secondary">
          {data || "Click on edit to add Investment Philosophy"}
        </p>
      )}
    </fieldset>
  );
}
