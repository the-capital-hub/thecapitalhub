import "./Support.scss";
import ComingSoon from "../../ComingSoon/ComingSoon";
import { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    document.title = "Support | The Capital Hub";
  }, []);
  return (
    <div className="support_container">
      <div className="content-70 py-5">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Support;
