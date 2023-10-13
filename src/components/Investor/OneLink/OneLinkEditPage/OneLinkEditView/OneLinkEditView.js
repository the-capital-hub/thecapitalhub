import React, { useState, useEffect } from "react";
import "./OneLinkEditView.scss";
import DollarRupeeImage from "../../../../../Images/Dollar_rupee.svg";
import PramodSq from "../../../../../Images/Pramod.jpeg";
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
import { getBase64 } from "../../../../../utils/getBase64";

const OneLinkEditView = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const userId = loggedInUser._id;
  const [company, setCompany] = useState({});
  const [formData, setFormData] = useState({
    company: "",
    description: "",
    logo: "",
    tagline: "",
  });
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    getStartupByFounderId(userId)
      .then(({ data }) => {
        setCompany(data);
        setFormData({
          company: data.company || "",
          description: data.description || "",
          logo: data.logo || "",
          tagline: data.tagline || "",
        });
      })
      .catch(() => setCompany({}));
  }, [userId]);

  useEffect(() => {
    // Fetch the image data from the URL
    fetch(company?.logo)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a URL for the blob data
        const blobUrl = URL.createObjectURL(blob);
        setImageData(blobUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, [company?.logo]);

  const handleInputChange = (field, event) => {
    const updatedValue = event.target.value;
    if (!updatedValue) return;
    setFormData({ ...formData, [field]: updatedValue });
  };

  const handleUpdate = (logo) => {
    if (logo) {
      formData.logo = logo;
    }
    postStartUpData({
      ...formData,
      founderId: loggedInUser._id,
    })
      .then(({ data }) => {
        setSelectedLogo(data.logo);
      })
      .catch((err) => console.log(err));
  };

  const handleDownloadPDF = () => {
    const element = document.querySelector(".download_preview");
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
      button.style.display = "none";
    });
    html2canvas(element, {
      allowTaint: false,
      removeContainer: true,
      backgroundColor: "#ffffff",
      scale: window.devicePixelRatio,
      useCORS: false,
    }).then((canvas) => {
      const contentDataURL = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let pdf = new jsPDF("p", "mm", "a4");
      let position = 5;

      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${formData.company}.pdf`);
      buttons.forEach((button) => {
        button.style.display = "block";
      });
    });
  };

  const handlePreviewPDF = () => {
    const container = document.querySelector(".download_preview");
    html2canvas(container, {
      allowTaint: false,
      removeContainer: true,
      backgroundColor: "#ffffff",
      scale: window.devicePixelRatio,
      useCORS: false,
    }).then((canvas) => {
      const contentDataURL = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let pdf = new jsPDF("p", "mm", "a4");
      let position = 5;

      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      const blob = pdf.output("blob");
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
    });
  };

  const logoOnChangeHandler = async ({ target }) => {
    const logo = await getBase64(target.files[0]);
    console.log(target.files[0]);
    setFormData((prevForm) => {
      return {
        ...prevForm,
        logo: logo,
      };
    });
    handleUpdate(logo);
  };

  return (
    <>
      <div className="editview_container">
        <div className="col">
          <SmallProfileCard text={"Edit"} />
        </div>
        <div className="box_container px-3 px-lg-5 py-5 my-4">
          {/* <section className="dollar_rupree">
            <img src={DollarRupeeImage} alt="image" />
          </section> */}
          <div className="download_preview">
            <section className="company_description">
              <div
                className="mx-2 my-2 my-md-0"
                style={{ height: "120px", width: "120px" }}
              >
                <label htmlFor="logoImg" className="position-relative">
                  <img
                    src={selectedLogo || imageData}
                    alt="image"
                    style={{ height: "120px", width: "120px" }}
                    role="button"
                  />
                  <span
                    style={{ fontSize: "10px", left: "30%" }}
                    className="position-absolute top-50 text-white rounded-pill bg-dark py-1 px-2"
                  >
                    Update
                  </span>
                </label>
                <input
                  type="file"
                  value=""
                  id="logoImg"
                  name="logo"
                  onChange={logoOnChangeHandler}
                  accept=".jpg, .jpeg, .png, .webp, .svg"
                  hidden
                />
              </div>
              <div className="company_text text-center text-md-start">
                <h6>
                  <input
                    className="name_container fs-5 "
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e)}
                    onBlur={(e) => handleUpdate()}
                  />
                </h6>
                <h6>
                  <input
                    className="name_container "
                    value={formData.tagline}
                    onChange={(e) => handleInputChange("tagline", e)}
                    onBlur={(e) => handleUpdate()}
                  />
                </h6>
                <hr className="m-0" />
                <h6>
                  <textarea
                    className="description_container"
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
              <button className="download_button" onClick={handleDownloadPDF}>
                Download
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default OneLinkEditView;
