import "./ModalBSBody.scss";

function ModalBSBody({ children, className }) {
  return <div class={`modal-body ${className}`}>{children}</div>;
}
 
export default ModalBSBody;
