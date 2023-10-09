import React, { useEffect } from "react";
import "./OneLinkEditPage.scss";
import OneLinkEditView from "./OneLinkEditView/OneLinkEditView";

const OneLinkEditPage = () => {
  useEffect(() => {
    document.title = "Edit One Link | The Capital Hub";
  }, []);
  return (
    <div className="container editpage_container">
      <div className="row mt-5 mt-lg-2">
        <OneLinkEditView />
      </div>
    </div>
  );
};

export default OneLinkEditPage;
