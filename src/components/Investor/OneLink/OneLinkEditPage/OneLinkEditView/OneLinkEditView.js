import React, { useState, useEffect } from "react";
import "./OneLinkEditView.scss";
import DollarRupeeImage from "../../../../../Images/Dollar_rupee.svg";
import PramodSq from "../../../../../Images/PramodSqare.png";
import OnePagePreviewCard from "../../../InvestorGlobalCards/OneLink/OnePagePreviewCard/OnePagePreviewCard";
import Table from "../../Table/Table";
import TeamCard from "../../../InvestorGlobalCards/OneLink/TeamCard/TeamCard";
import FundAsking from "../../Table/FundAsking/FundAsking";
import FundDeployment from "../../Table/FundDeployment/FundDeployment";
import { Link } from "react-router-dom";
import SmallProfileCard from "../../../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import OneLinkMarketSection from "../OneLinkMarketSection/OneLinkMarketSection";
import OneLinkContactEdit from "./OneLinkContactEdit/OneLinkContactEdit";
import { useSelector } from "react-redux";
import {
  getStartupByFounderId,
  postStartUpData,
} from "../../../../../Service/user";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const OneLinkEditView = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const userId = loggedInUser._id;
  const [company, setCompany] = useState({});
  const [formData, setFormData] = useState({
    company: "",
    description: "",
  });

  useEffect(() => {
    getStartupByFounderId(userId)
      .then(({ data }) => {
        setCompany(data);
        setFormData({
          company: data.company || "",
          description: data.description || "",
        });
      })
      .catch(() => setCompany({}));
  }, [userId]);

  const handleInputChange = (field, event) => {
    const updatedValue = event.target.value;
    if (!updatedValue) return;
    setFormData({ ...formData, [field]: updatedValue });
  };

  const handleUpdate = () => {
    postStartUpData({
      ...formData,
      founderId: loggedInUser._id,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleDownloadPDF = () => {
    const container = document.querySelector(".download_preview");

    if (container) {
      html2canvas(container).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save(formData.company + ".pdf");
      });
    }
  };

  const handlePreviewPDF = () => {
    const container = document.querySelector(".download_preview");
    if (container) {
      html2canvas(container).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        const blob = pdf.output("blob");
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl, "_blank");
      });
    }
  };


  return (
    <>
      <div className="editview_container">

        <div className="col">
          <SmallProfileCard text={"Edit"} />
        </div>
        <div className="box_container">
          {/* <section className="dollar_rupree">
            <img src={DollarRupeeImage} alt="image" />
          </section> */}
          <div className="download_preview">
            <section className="company_description">
              <img src={PramodSq} alt="image" />
              <div className="company_text">
                <h6>
                  <input
                  className="name_container"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e)}
                    onBlur={(e) => handleUpdate()}
                  />
                </h6>
                <hr />
                <h6>
                  <textarea
                  className="name_container"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e)}
                    onBlur={(e) => handleUpdate()}
                  />
                </h6>
              </div>
            </section>

            <section className="card_section">
              <OnePagePreviewCard company={company} page={"oneLinkEdit"} />
            </section>

            <section className="market_section">
              <OneLinkMarketSection company={company} page={"oneLinkEdit"} />
            </section>

            <section className="table_section">
              <Table page={"oneLinkEditPage"} />
            </section>

            <section className="team_section">
              {company?.team?.map((team, index) => (
                <TeamCard
                  index={index + 1}
                  profile={team?.image}
                  name={team?.name}
                  designation={team?.designation}
                  company={company}
                  page={"oneLinkEdit"}
                />
              ))}
            </section>

            <section className="fund_asking_deployment">
              <div className="funding_divider">
                <FundAsking company={company} page={"oneViewEdit"} />
              </div>
              <div className="funding_divider">
                <OneLinkContactEdit
                  oneLink={company.oneLink}
                  page={"oneViewEdit"}
                />
              </div>
            </section>
          </div>
          <section className="button_preview_download_section pdf-hidden">
            <div className="download_button_container">
              <button onClick={handlePreviewPDF}>Preview</button>
              <button className="download_button" onClick={handleDownloadPDF}>Download</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default OneLinkEditView;
