import { useEffect } from "react";
import "./Notifications.scss";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";

function Notifications() {
  useEffect(() => {
    document.title = "Notifications | The Capital Hub";
  }, []);
  return (
    <div className="notificaitons_container">
      <ComingSoon />
    </div>
  );
}

export default Notifications;
