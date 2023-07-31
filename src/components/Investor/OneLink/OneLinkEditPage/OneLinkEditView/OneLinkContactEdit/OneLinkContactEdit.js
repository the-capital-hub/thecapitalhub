import React from "react";
import "./OneLinkContactEdit.scss";

const OneLinkContactEdit = () => {
  return (
    <>
      <div className="row fund_asking_container">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Details</h5>
              <div className="card_inputs">
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Mobile number" />
                <input type="text" placeholder="Email Id" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneLinkContactEdit;
