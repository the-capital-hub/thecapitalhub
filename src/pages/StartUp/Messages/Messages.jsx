import { useEffect } from "react";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";
import "./Messages.scss";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";

function Messages() {
  useEffect(() => {
    document.title = "Messages | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="messages_container">
        <ComingSoon />
      </div>
    </MaxWidthWrapper>
  );
}

export default Messages;
