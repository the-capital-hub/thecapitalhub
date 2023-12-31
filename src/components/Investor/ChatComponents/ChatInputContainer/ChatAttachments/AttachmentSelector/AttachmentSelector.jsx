import { useEffect, useRef } from "react";
import imageIcon from "../../../../../../Images/Chat/image.svg";
import documentIcon from "../../../../../../Images/Chat/document.svg";
import videoIcon from "../../../../../../Images/Chat/attachVideo.svg";
import onelinkIcon from "../../../../../../Images/Chat/Onelink.svg";
import IconAttach from "../../../../SvgIcons/IconAttach";

export default function AttachmentSelector({
  showAttachDocs,
  setShowAttachDocs,
  handleFileChange,
  handleOnelinkClick,
}) {
  const attachDocContainerRef = useRef();

  // Outside Click Handler
  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (
        attachDocContainerRef.current &&
        !attachDocContainerRef.current.contains(event.target)
      ) {
        setShowAttachDocs(false);
      }
    };

    document.addEventListener("click", outsideClickHandler);

    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, [setShowAttachDocs]);

  return (
    <div class="attactment-container" ref={attachDocContainerRef}>
      <button
        className="btn border-0 bg-transparent"
        onClick={() => setShowAttachDocs(!showAttachDocs)}
      >
        <IconAttach
          size={"20px"}
          color={`${showAttachDocs ? "var(--currentTheme)" : "#989898"}`}
        />
      </button>
      {showAttachDocs && (
        <div className="attachment-options shadow-sm">
          <div className="attachment-option">
            <label htmlFor="documentInput" style={{ cursor: "pointer" }}>
              <img
                className="p-1 rounded-circle"
                src={documentIcon}
                alt="upload document"
              />
              <p>Document</p>
            </label>
            <input
              type="file"
              id="documentInput"
              name="document"
              hidden
              onChange={handleFileChange}
            />
          </div>
          <div className="attachment-option">
            <label htmlFor="image" style={{ cursor: "pointer" }}>
              <img
                src={imageIcon}
                alt="upload images"
                className="p-1 rounded-circle "
              />
              <p>Image</p>
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/svg+xml"
              id="image"
              name="image"
              hidden
              onChange={handleFileChange}
            />
          </div>
          <div className="attachment-option">
            <label htmlFor="video" style={{ cursor: "pointer" }}>
              <img
                src={videoIcon}
                alt="upload video"
                className="p-1 rounded-circle "
              />
              <p>Video</p>
            </label>
            <input
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
              id="video"
              name="video"
              hidden
              onChange={handleFileChange}
            />
          </div>
          <div className="attachment-option" onClick={handleOnelinkClick}>
            <label htmlFor="onelink" style={{ cursor: "pointer" }}>
              <img
                src={onelinkIcon}
                alt="OneLink"
                className="p-1 rounded-circle"
              />
              <p>OneLink</p>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
