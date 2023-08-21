import React from "react";
import "./OneLinkEditPage.scss";
import OneLinkEditView from "./OneLinkEditView/OneLinkEditView";

const OneLinkEditPage = () => {
  return (
    <div className="container-fluid editpage_container">
      <div className="row mt-5 mt-lg-2">
        <OneLinkEditView />
      </div>
    </div>
  );
};

export default OneLinkEditPage;
