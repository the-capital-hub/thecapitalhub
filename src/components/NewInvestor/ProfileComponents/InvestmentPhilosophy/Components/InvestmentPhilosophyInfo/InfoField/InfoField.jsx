import React from "react";

export default function InfoField({ isEditing, data, name, legend }) {
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
      {isEditing ? (
        <textarea
          defaultValue={data}
          name={name}
          onChange={handleInfoChange}
          className="profile_edit_field w-100"
          rows={5}
        />
      ) : (
        <p className="text-secondary">
          {data || "Click on edit to add Investment Philosophy"}
        </p>
      )}
    </fieldset>
  );
}
