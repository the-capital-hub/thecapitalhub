import { useEffect } from "react";
import ComingSoon from "../../ComingSoon/ComingSoon";
import "./Investors.scss";

const Investors = () => {
  useEffect(() => {
    document.title = "Investors | The Capital Hub";
  }, []);
  return (
    <div className="investor_container">
      <div className="content-70 py-5">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Investors;
