import React, { useEffect } from "react";
import "./OneLinkEditPage.scss";
import OneLinkEditView from "./OneLinkEditView/OneLinkEditView";
import MaxWidthWrapper from "../../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../../Store/features/design/designSlice";
import { useDispatch } from "react-redux";

const OneLinkEditPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Edit One Link | The Capital Hub";
    dispatch(setPageTitle("Edit One-Link"));
  }, [dispatch]);
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
