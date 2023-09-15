import "./ModalBSHeader.scss";

function ModalBSHeader({ title, label, className }) {
  return (
    <div class={`modal-header ${className}`}>
      <h1 class="modal-title fs-5" id={label || "modalLabel"}>
        {title}
      </h1>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default ModalBSHeader;
