import React, { useEffect } from "react";
import "./Team.scss";
import ComingSoon from "../../ComingSoon/ComingSoon";
const Team = () => {
  useEffect(() => {
    document.title = "Team | The Capital Hub";
  }, []);
  return (
    <div className="team_container">
      <div className="content-70 py-5">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Team;
