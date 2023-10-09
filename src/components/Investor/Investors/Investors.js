import { useEffect } from "react";
import ComingSoon from "../../ComingSoon/ComingSoon";
import "./Investors.scss";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";

const Investors = () => {
  useEffect(() => {
    document.title = "Investors | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="investor_container">
        <div className="content-70 py-5">
          <ComingSoon />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Investors;
