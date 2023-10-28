import React from "react";

export default function OffcanvasBSHeader({ title, classNames, onClose }) {
  function handleCloseClick() {
    onClose();
  }

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
        onClick={handleCloseClick}
      ></button>
    </div>
  );
}
