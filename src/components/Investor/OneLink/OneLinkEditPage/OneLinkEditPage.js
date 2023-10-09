import React, { useEffect } from "react";
import "./OneLinkEditPage.scss";
import OneLinkEditView from "./OneLinkEditView/OneLinkEditView";
import MaxWidthWrapper from "../../../Shared/MaxWidthWrapper/MaxWidthWrapper";

const OneLinkEditPage = () => {
  useEffect(() => {
    document.title = "Edit One Link | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="editpage_container">
        <div className="row mt-5 mt-lg-2">
          <OneLinkEditView />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default OneLinkEditPage;
