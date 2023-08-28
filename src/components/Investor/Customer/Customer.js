import { useEffect } from "react";
import ComingSoon from "../../ComingSoon/ComingSoon";
import "./Customer.scss";

const Customer = () => {
  useEffect(() => {
    document.title = "Customer | The Capital Hub";
  }, []);
  return (
    <div className="customer_container">
      <div className="content-70 py-5">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Customer;
