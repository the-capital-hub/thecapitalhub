import { ListGroup } from "react-bootstrap";
import { IoDocumentAttach } from "react-icons/io5";

export default function DocumentAttachment({
  selectedDocument,
  removeSelectedDocument,
}) {
  return (
    <>
      {selectedDocument && (
        <ListGroup className="document-preview">
          <ListGroup.Item className="d-flex gap-2 align-items-center">
            <IoDocumentAttach size={"3rem"} />
            <p className="m-0">{selectedDocument.name}</p>
            <button className="remove-preview" onClick={removeSelectedDocument}>
              X
            </button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  );
}
