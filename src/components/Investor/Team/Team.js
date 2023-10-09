import React, { useEffect } from "react";
import "./Team.scss";
import ComingSoon from "../../ComingSoon/ComingSoon";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
const Team = () => {
  useEffect(() => {
    document.title = "Team | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="team_container">
        <div className="content-70 py-5">
          <ComingSoon />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Team;
