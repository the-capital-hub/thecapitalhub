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

  const handleDownloadPDF = () => {
    const element = document.querySelector(".onePager");
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
      pdf.save(`${username}.pdf`);
      buttons.forEach((button) => {
        button.style.display = "block";
      });
    });
  };

  const handlePreviewPDF = () => {
    const element = document.querySelector(".onePager");
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
      console.log(contentDataURL);
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
      <div className="border_left">
        <div className="onePager shadow-sm border px-3 px-lg-5">
          <div className="d-flex justify-content-between align-items-center w-100">
            <h1>One Pager</h1>
            <button
              className="download-button me-5"
              onClick={handleDownloadPDF}
            >
              Download
            </button>
          </div>
          {/* <div className="currency">
            <span
              className={rupeeHighlight && "highlighted"}
              onClick={() => changeHighlight("rupee")}
            >
              ₹
            </span>
            <span
              className={dollarHighlight && "highlighted"}
              onClick={() => changeHighlight("dollar")}
            >
              $
            </span>
          </div> */}
          <div className="companyDetails">
            <CompanyDetails
              companyName={onePager.company}
              description={onePager.description}
              // image={onePager.logo}
              image={imageData}
              tagline={onePager.tagline}
            />
          </div>
          {/* <hr /> */}

          <div className="simple_cards_container">
            <div className="simple_cards">
              <SimpleCard title={"Problem"} text={onePager.problem} />
              <SimpleCard title={"Solution"} text={onePager.solution} />
              <SimpleCard
                title={"Competitive Landscape"}
                text={onePager.competitiveLandscape}
              />
            </div>
          </div>

          <hr />
          <div className="">
            <Title title="Market (in cr)" />
            <div className="market_cards">
              <MarketCard
                title={"TAM"}
                subtitle={"(Total Addressable Market)"}
                amount={onePager.TAM}
              />
              <MarketCard
                title={"SAM"}
                subtitle={"(Servicable Addressable Market)"}
                amount={onePager.SAM}
              />
              <MarketCard
                title={"SOM"}
                subtitle={"(Serviceable Obtainable Market)"}
                amount={onePager.SOM}
              />
            </div>
          </div>

          <div className="projections">
            <Title title={"Projections"} />
            <Table hidden={true} />
          </div>

          <div className="team">
            <Title title={"Team"} />
            <div className="team_cards">
              {onePager?.team?.map((team, index) => (
                <TeamsCard
                  key={index}
                  image={team.image}
                  name={team.name}
                  designation={team.designation}
                />
              ))}
            </div>
          </div>

          <div className="fundingAndContact">
            <div className="left">
              <Title title={"Funding ask (in Lakhs)"} />
              <div className="box">
                <h1>{onePager.fundingAsk || `Enter Funding Amount`}</h1>
                <hr />
                <ImagePlaceholder
                  text={
                    "Upload image a piechart showing how you utilize the funding amount"
                  }
                />
              </div>
            </div>
            {/* <div className="right">
              <InvestNow page={"onePager"} />
            </div> */}
          </div>
          <div className="buttons">
            <button onClick={handlePreviewPDF}>Preview</button>
            {/* <button onClick={handleDownloadPDF}>Download</button> */}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default OnePager;
