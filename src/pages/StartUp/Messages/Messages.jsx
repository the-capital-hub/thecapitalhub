import { useEffect } from "react";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";
import "./Messages.scss";

function Messages() {
  useEffect(() => {
    document.title = "Messages | The Capital Hub";
  }, []);
  return (
    <div className="messages_container">
      <ComingSoon />
    </div>
  );
}

export default Messages;
