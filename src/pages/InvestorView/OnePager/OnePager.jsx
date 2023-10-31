import { useState, useEffect } from "react";
import "./OnePager.scss";
import {
  // Card,
  CompanyDetails,
  ImagePlaceholder,
  MarketCard,
  SimpleCard,
  // TeamCard,
  Title,
} from "../../../components/InvestorView";
// import OnePagePreviewCard from "../../../components/Investor/InvestorGlobalCards/OneLink/OnePagePreviewCard/OnePagePreviewCard";
// import OnePagePreview from "../../../components/Investor/OneLink/OnePagePreview/OnePagePreview";
import Table from "../../../components/Investor/OneLink/Table/Table";
import TeamsCard from "../../../components/InvestorView/TeamsCard/TeamsCard";
import InvestNow from "../InvestNow/InvestNow";
import { useParams } from "react-router-dom";
import { getOnePager } from "../../../Service/user";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { useDispatch } from "react-redux";
import {
  OnePagerCompanyLogo,
  OnePagerCompanyInfo,
  OnePagerCompanyAbout,
  OnePagerMarketSize,
  OnePagerSocialLinks,
  OnePagerProjections,
  OnePagerFundAsking,
  OnePagerRoadmap,
  OnePagerTeam,
} from "../../../components/Shared/OnePager";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";

const OnePager = () => {
  const [rupeeHighlight, setRupeeHighlight] = useState(true);
  const [dollarHighlight, setDollarHighlight] = useState(false);
  const { username } = useParams();
  const [onePager, setOnePager] = useState([]);
  const [imageData, setImageData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "OnePager - One Link | The Capital Hub";
    dispatch(setPageTitle("OnePager"));
  }, []);

  useEffect(() => {
    getOnePager(username)
      .then(({ data }) => {
        setOnePager(data);
        console.log(data);
      })
      .catch(() => setOnePager([]));
  }, [username]);

  // Change Highlight
  const changeHighlight = (currency) => {
    if (currency === "rupee") {
      setDollarHighlight(false);
      setRupeeHighlight(true);
    }
    if (currency === "dollar") {
      setDollarHighlight(true);
      setRupeeHighlight(false);
    }
  };

  // Handle download PDF
  const handleDownloadPDF = () => {
    const element = document.querySelector(".onePager_wrapper");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.style.display = "none";
    });
    html2canvas(element, {
      allowTaint: false,
      removeContainer: true,
      backgroundColor: "#ffffff",
      scale: window.devicePixelRatio,
      useCORS: true,
      windowWidth: '1400px',
    }).then((canvas) => {
      const contentDataURL = canvas.toDataURL("image/png", 0.7);
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let pdf = new jsPDF("p", "mm", "a4");
      let position = 5;

      pdf.addImage(contentDataURL, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${username}.pdf`);
      buttons.forEach((button) => {
        button.style.display = "block";
      });
    });
  };

  // Handle preview PDF
  const handlePreviewPDF = () => {
    const element = document.querySelector(".onePager_wrapper");
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.style.display = "none";
    });
    html2canvas(element, {
      allowTaint: false,
      removeContainer: true,
      backgroundColor: "#ffffff",
      scale: window.devicePixelRatio,
      useCORS: true,
      windowWidth: '1400px',
    }).then((canvas) => {
      const contentDataURL = canvas.toDataURL("image/png", 0.7);
      console.log(contentDataURL);
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let pdf = new jsPDF("p", "mm", "a4");
      let position = 5;

      pdf.addImage(contentDataURL, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      const blob = pdf.output("blob");
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
      buttons.forEach((button) => {
        button.style.display = "block";
      });
    });
  };

  useEffect(() => {
    // Fetch the image data from the URL
    fetch(onePager.logo)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a URL for the blob data
        const blobUrl = URL.createObjectURL(blob);
        setImageData(blobUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, [onePager.logo]);

  return (
    <MaxWidthWrapper>
      <div className=" ps-xl-3 mb-5">
        {onePager.length !== 0 ? (
          <div
            className="onePager_wrapper d-flex flex-column gap-4"
            theme="startup"
          >
            {/* onePager Company Logo */}
            <OnePagerCompanyLogo image={onePager.logo} />

            {/* onePager company info */}
            <OnePagerCompanyInfo
              company={onePager.company}
              location={onePager.location}
              startedAtDate={onePager.startedAtDate}
              keyFocus={onePager.keyFocus}
              socialLinks={onePager.socialLinks}
            />

            {/* onePager company about */}
            <OnePagerCompanyAbout
              description={onePager.description}
              problem={onePager.problem}
              solution={onePager.solution}
            />

            {/* onePager Market info */}
            <div className="bg-white rounded-4 border shadow-sm">
              <div className="border-bottom">
                <div className="px-3 px-lg-4 py-5 d-flex flex-column gap-5">
                  {/* Market Size */}
                  <OnePagerMarketSize companyData={onePager} />
                  {/* Social Links */}
                  <OnePagerSocialLinks companyData={onePager} />
                  {/* Projections */}
                  <OnePagerProjections companyData={onePager} />
                  {/* Fund Asking */}
                  <OnePagerFundAsking companyData={onePager} />
                  {/* Roadmap */}
                  <OnePagerRoadmap companyData={onePager} />
                  {/* Team */}
                  <OnePagerTeam team={onePager.team} />
                </div>
              </div>

              {/* Action buttons */}
              <div className="onePager_action_buttons px-3 px-lg-4 py-5 d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="action_buttons_container d-flex flex-column flex-md-row gap-4">
                  <div className="preview_button">
                    <button
                      type="button"
                      className="text-black rounded-pill onePager_action_save"
                      onClick={handlePreviewPDF}
                    >
                      Preview
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-white rounded-pill onePager_action_publish"
                    onClick={handleDownloadPDF}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* OnePager End */}
          </div>
        ) : (
          <SpinnerBS className={"d-flex justify-content-center w-100 py-5"} />
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default OnePager;
