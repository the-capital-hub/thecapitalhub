import React from "react";
import "./OffcanvasBSContainer.scss";

export default function OffcanvasBSContainer({
  id,
  placement = "offcanvas-end",
  children,
  containerClasses,
}) {
  return (
    // Add these attributes to the triggering "button" or "a" tag
    // data-bs-toggle="offcanvas" data-bs-target="<id>" aria-controls="offcanvasTop"
    <div
      className={`offcanvas ${placement} ${containerClasses}`}
      tabIndex="-1"
      id={id}
      ariaLabelledby="offcanvasLabel"
    >
      {children}
    </div>
  );
}
