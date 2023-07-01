import React from "react";


const LogOutPopUp = ({ setPopupOpen, popupOpen }) => {
    const handleClose = () => setPopupOpen(false);
  return (
    <>
      {popupOpen && <div className="background-overlay"></div>}
      <div
        className={`modal ${popupOpen ? "d-block" : ""}`}
        // tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="createpost_modal-header">
              <div className="createpostpopup">
               popup
              </div>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                style={{ background: "transparent", border: "none" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h1>Logout</h1>
            </div>
            <div className="createpost_modal_footer">
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOutPopUp;
