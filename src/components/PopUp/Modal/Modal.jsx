import "./Modal.scss";

function Modal({ children }) {
  return (
    <div className="custom-modal">
      <div className="modal-overlay"></div>
      <div className="modal-container">{children}</div>
    </div>
  );
}

export default Modal;
