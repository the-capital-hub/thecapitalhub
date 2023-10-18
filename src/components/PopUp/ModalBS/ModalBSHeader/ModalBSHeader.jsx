import "./ModalBSHeader.scss";

function ModalBSHeader({ title, label, className, closeRef }) {
  return (
    <div className={`modal-header ${className}`}>
      <h1 className="modal-title fs-5" id={label || "modalLabel"}>
        {title}
      </h1>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        ref={closeRef}
      ></button>
    </div>
  );
}

export default ModalBSHeader;
