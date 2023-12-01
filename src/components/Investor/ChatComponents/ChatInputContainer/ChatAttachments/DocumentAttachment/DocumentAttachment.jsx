export default function DocumentAttachment({
  selectedDocument,
  removeSelectedDocument,
}) {
  return (
    <>
      {selectedDocument && (
        <div className="document-preview">
          <p>{selectedDocument.name}</p>
          <button className="remove-preview" onClick={removeSelectedDocument}>
            X
          </button>
        </div>
      )}
    </>
  );
}
