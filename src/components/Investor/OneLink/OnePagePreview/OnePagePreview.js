import React from "react";
import "./OnePagePreview.scss";
import EditIcon from "../../../../Images/WhiteEdit.svg";
import DollarRupeeImage from "../../../../Images/Dollar_rupee.svg";
import PramodSq from "../../../../Images/Pramod.jpeg";
import OnePagePreviewCard from "../../InvestorGlobalCards/OneLink/OnePagePreviewCard/OnePagePreviewCard";
import Table from "../Table/Table";
import TeamCard from "../../InvestorGlobalCards/OneLink/TeamCard/TeamCard";
import FundAsking from "../Table/FundAsking/FundAsking";
import FundDeployment from "../Table/FundDeployment/FundDeployment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getStartupByFounderId } from "../../../../Service/user";

const OnePagePreview = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // console.log(loggedInUser);

  const userId = loggedInUser._id;
  const [company, setCompany] = useState([]);
  useEffect(() => {
    getStartupByFounderId(userId)
      .then(({ data }) => {
        setCompany(data);
      })
      .catch(() => setCompany([]));
  }, [userId]);

  // console.log("Company:", company);

  return (
    <>
      <div className="onepagepreview_container mt-3">
        <div className="box_container">
          <section className="heading_section">
            <h6>One Page Preview</h6>
            <Link to={"/onelink/edit"}>
              <button>
                Edit &nbsp;
                <img src={EditIcon} alt="image" />
              </button>
            </Link>
          </section>
          <hr />
          {/* <section className="dollar_rupree">
            <img src={DollarRupeeImage} alt="image" />
          </section> */}

          <section className="company_description">
            <img src={PramodSq} alt="image" />
            <div className="company_text">
              <h6>{company?.company || `Enter company description`} </h6>
              <hr />
              <h6>
                {company?.description || "Eg: India’s best startup platfrom"}
              </h6>
            </div>
          </section>

          <section className="card_section">
            <OnePagePreviewCard company={company} />
          </section>

          <section className="table_section">
            <Table />
          </section>

          <section className="team_section">
            {/* <TeamCard/> */}
            {company?.team?.map((team, index) => (
              <TeamCard
                index={index}
                profile={team?.image}
                name={team?.name}
                designation={team?.designation}
              />
            ))}
          </section>

          <section className="row fund_asking_deployment">
            <FundAsking company={company} />
            <FundDeployment />
          </section>
        </div>
      </div>
    </>
  );
};

export default OnePagePreview;
