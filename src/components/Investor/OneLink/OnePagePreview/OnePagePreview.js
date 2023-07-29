import React from "react";
import "./OnePagePreview.scss";
import EditIcon from "../../../../Images/WhiteEdit.svg";
import DollarRupeeImage from "../../../../Images/Dollar_rupee.svg";
import PramodSq from "../../../../Images/PramodSqare.png";
import OnePagePreviewCard from "../../Cards/OneLink/OnePagePreviewCard/OnePagePreviewCard";
import Table from "../Table/Table";
import TeamCard from "../../Cards/OneLink/TeamCard/TeamCard";

const OnePagePreview = () => {
  return (
    <>
      <div className="onepagepreview_container">
        <div className="box_container">
          <section className="heading_section">
            <h6>One Page Preview</h6>
            <button>
              Edit &nbsp;
              <img src={EditIcon} alt="" />
            </button>
          </section>
          <hr />
          <section className="dollar_rupree">
            <img src={DollarRupeeImage} alt="" />
          </section>

          <section className="company_description">

            <img src={PramodSq} alt="" />
            <div className="company_text">
              <h6>Enter company description </h6>
              <hr />
              <h6>Eg: India’s best startup platfrom</h6>
            </div>
          </section>

          <section className="card_section">
            <OnePagePreviewCard/>
          </section>

          <section className="table_section">
            <Table/>
          </section>

          <section className="team_section">
            <TeamCard/>
          </section>
        </div>
      </div>
    </>
  );
};

export default OnePagePreview;
