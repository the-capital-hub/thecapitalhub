import React from "react";
import "./OneLinkEditPage.scss";
import OneLinkEditView from "./OneLinkEditView/OneLinkEditView";

const OneLinkEditPage = () => {
  return (
    <div className="container-fluid editpage_container">
      <div className="row mt-2">
        <div className="row">
          <div className="col-12 mt-2">
            <OneLinkEditView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneLinkEditPage;
