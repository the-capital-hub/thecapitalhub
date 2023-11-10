import React from "react";

export default function InfoField({
  isEditing,
  investmentPhilosophy,
  handleInfoChange,
  name,
  legend,
}) {
  return (
    <fieldset className="">
      <legend>{legend}</legend>
      {isEditing ? (
        <textarea
          value={investmentPhilosophy}
          name={name}
          onChange={handleInfoChange}
          className="profile_edit_field w-100"
          rows={5}
        />
      ) : (
        <p className="text-secondary">
          {investmentPhilosophy || "Click on edit to add Investment Philosophy"}
        </p>
      )}
    </fieldset>
  );
}
