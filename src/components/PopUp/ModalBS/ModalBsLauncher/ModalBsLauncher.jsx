import "./ModalBsLauncher.scss";

function ModalBsLauncher({ id, className, children }) {
  return (
    <span
      type="button"
      className={`w-100 ${className}`}
      data-bs-toggle="modal"
      data-bs-target={`#${id}`}
    >
      {children}
    </span>
  );
}

export default ModalBsLauncher;
