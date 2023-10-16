import "./Support.scss";
import ComingSoon from "../../ComingSoon/ComingSoon";
import { useEffect } from "react";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import OnelinkValidation from "../../Shared/OnelinkValidation/OnelinkValidation";

const Support = () => {
  useEffect(() => {
    document.title = "Support | The Capital Hub";
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="support_container">
        <OnelinkValidation />

        {/* <div className="content-70 py-5">
          <ComingSoon />
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default Support;
