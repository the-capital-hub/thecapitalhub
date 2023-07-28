import React from "react";
import { Link } from "react-router-dom";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";

const OneLink = () => {
  return (
    <>
      <div className="container-fluid createpost_container">
        <div className="row mt-2">
          <SmallProfileCard text={"One link"}/>
        </div>
        <div className="row">
          <div className="col-12 colSize">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default OneLink;
