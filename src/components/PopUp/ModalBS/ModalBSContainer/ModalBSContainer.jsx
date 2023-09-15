import "./ModalBSContainer.scss";

function ModalBSContainer({ id, label, children, showModal }) {
  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby={label || "modalLabel"}
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default ModalBSContainer;
