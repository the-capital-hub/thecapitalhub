import { useEffect } from "react";
import "./Notifications.scss";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";

function Notifications() {
  useEffect(() => {
    document.title = "Notifications | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="notificaitons_container">
        <ComingSoon />
      </div>
    </MaxWidthWrapper>
  );
}

export default Notifications;
