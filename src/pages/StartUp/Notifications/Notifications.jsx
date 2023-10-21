import { useEffect } from "react";
import "./Notifications.scss";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import { useDispatch } from "react-redux";

function Notifications() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Notifications | The Capital Hub";
    dispatch(setPageTitle("Notifications"));
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
