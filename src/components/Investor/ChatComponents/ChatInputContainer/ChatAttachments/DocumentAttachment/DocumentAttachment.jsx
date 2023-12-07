// import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { IoDocumentAttach } from "react-icons/io5";
// import { displayPdf } from "../../../../../../utils/getBase64";
// import "pdfjs-dist/build/pdf.worker.entry";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export default function DocumentAttachment({
  selectedDocument,
  removeSelectedDocument,
}) {
  // const [iframeData, setIframeData] = useState(null);

  // useEffect(() => {
  //   if (selectedDocument && selectedDocument.type === "application/pdf") {
  //     const getPdfIframeData = async (selectedDocument) => {
  //       try {
  //         const data = await displayPdf(selectedDocument);
  //         setIframeData(data);
  //       } catch (error) {
  //         console.error("Error displaying PDF:", error);
  //       }
  //     };

  //     // Call function
  //     getPdfIframeData(selectedDocument);
  //   }
  // }, [selectedDocument]);

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // useEffect(() => {
  //   if (selectedDocument && selectedDocument.type === "application/pdf") {
  //   }
  // }, [selectedDocument]);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // };

  return (
    <>
      {selectedDocument && (
        <ListGroup className="document-preview">
          {/* {iframeData && (
            <iframe
              src={iframeData}
              id="pdfViewer"
              width="100%"
              height="100%"
              title="PDF Preview"
            ></iframe>
          )} */}

          {/* {selectedDocument && (
            <div>
              <Document
                file={selectedDocument}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          )} */}

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
