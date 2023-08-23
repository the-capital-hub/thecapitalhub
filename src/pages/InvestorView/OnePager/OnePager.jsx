import { useState, useEffect } from "react";
import "./OnePager.scss";
import {
  Card,
  CompanyDetails,
  ImagePlaceholder,
  MarketCard,
  SimpleCard,
  TeamCard,
  Title,
} from "../../../components/InvestorView";
import OnePagePreviewCard from "../../../components/Investor/InvestorGlobalCards/OneLink/OnePagePreviewCard/OnePagePreviewCard";
import OnePagePreview from "../../../components/Investor/OneLink/OnePagePreview/OnePagePreview";
import Table from "../../../components/Investor/OneLink/Table/Table";
import TeamsCard from "../../../components/InvestorView/TeamsCard/TeamsCard";
import InvestNow from "../InvestNow/InvestNow";
import { useParams } from "react-router-dom";
import { getOnePager } from "../../../Service/user";
import html2canvas from "html2canvas"; 
import jsPDF from "jspdf";

const OnePager = () => {
  const [rupeeHighlight, setRupeeHighlight] = useState(true);
  const [dollarHighlight, setDollarHighlight] = useState(false);
  const { username } = useParams();
  const [onePager, setOnePager] = useState([]);

  useEffect(() => {
    getOnePager(username)
      .then(({ data }) => {
        setOnePager(data);
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
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save(username + ".pdf");
      });
    }
  };
  const handlePreviewPDF = () => {
    const element = document.querySelector(".onePager");
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Open the PDF preview in a new tab
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);

        // Create a Blob from the PDF data and open it in a new tab
        const pdfBlob = pdf.output("blob");
        const blobUrl = URL.createObjectURL(pdfBlob);
        window.open(blobUrl, "_blank");
      });
    }
  };

  return (
    <div className="onePager">
      <h1>One Pager</h1>
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
          image={onePager.companyProfile}
        />
      </div>

      <hr />

      <div className="cards">
        <SimpleCard title={"Problem"} text={onePager.problem} />
        <SimpleCard title={"Solution"} text={onePager.solution} />
        <SimpleCard
          title={"Competitive Landscape"}
          text={onePager.competitiveLandscape}
        />
      </div>

      <hr />

      <div className="marketCards">
        <Title title="Market (in cr)" />
        <div className="cards">
          <MarketCard
            title={"TAM"}
            subtitle={"(Total Advisable Market)"}
            amount={onePager.TAM}
          />
          <MarketCard
            title={"SAM"}
            subtitle={"(Service Advisable Market)"}
            amount={onePager.SAM}
          />
          <MarketCard
            title={"SAM"}
            subtitle={"(Service Advisable Market)"}
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
        <div className="cards">
          {onePager?.team?.map((team, index) => (
            <TeamsCard name={team.name} designation={team.designation} />
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
        <div className="right">
          <InvestNow page={"onePager"}/>
        </div>
      </div>

      <div className="buttons">
        <button onClick={handlePreviewPDF}>Preview</button>
        <button onClick={handleDownloadPDF}>Download</button>
      </div>
    </div>
  );
};

export default OnePager;
