import { Offcanvas } from "react-bootstrap";
import "./AttachmentPreview.scss";
import SendIcon from "../../../../../Images/Send.svg";
import { useSelector } from "react-redux";
import { selectIsMobileView } from "../../../../../Store/features/design/designSlice";

export default function AttachmentPreview({
  children,
  sendText,
  setSendText,
  handleKeyDown,
  handleSend,
  showPreview,
  setShowPreview,
}) {
  const isMobileView = useSelector(selectIsMobileView);

  // Handle Close
  function handleClose() {
    setShowPreview(false);
    // setSelectedImage(null);
  }

  return (
    <div className="attachment-preview-wrapper">
      <Offcanvas
        show={showPreview}
        onHide={handleClose}
        placement={isMobileView ? "bottom" : "end"}
        className="attachment-preview"
        key={"attachment-offcanvas"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Attachments</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-3 justify-content-between">
          {children}

          {/* Send button */}
          <div className="d-flex align-items-center gap-2 py-2 send-container">
            <input
              type="text"
              className="text-input flex-grow-1"
              name="introductoryMessage"
              placeholder="Your message..."
              onChange={(e) => setSendText(e.target.value)}
              onKeyDown={handleKeyDown}
              value={sendText}
            />
            <button className="btn p-0 send-btn">
              <img
                className="border-start border-2"
                src={SendIcon}
                alt="Send"
                width={40}
                height={40}
                onClick={() => handleSend()}
              />
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
