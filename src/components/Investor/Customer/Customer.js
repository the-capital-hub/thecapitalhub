import { useEffect } from "react";
import ComingSoon from "../../ComingSoon/ComingSoon";
import "./Customer.scss";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";

const Customer = () => {
  useEffect(() => {
    document.title = "Customer | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="customer_container">
        <div className="content-70 py-5">
          <ComingSoon />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Customer;
