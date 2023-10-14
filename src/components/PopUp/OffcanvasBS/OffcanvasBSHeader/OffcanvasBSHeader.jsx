import React from "react";

export default function OffcanvasBSHeader({ title, classNames }) {
  return (
    <div className={`offcanvas-header ${classNames}`}>
      <h5 className="offcanvas-title" id="offcanvasLabel">
        {title}
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        ariaLabel="Close"
      ></button>
    </div>
  );
}
