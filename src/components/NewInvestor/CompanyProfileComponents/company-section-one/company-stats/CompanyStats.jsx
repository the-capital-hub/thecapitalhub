import {
  About1,
  About2,
  About3,
  About4,
  Revenue1,
  Revenue2,
  Revenue3,
} from "../../../../../Images/Investor/CompanyProfile";
import "./CompanyStats.scss";

export default function CompanyStats() {
  return (
    <div className="company__stats d-flex flex-column gap-4">
      <div className="stat__row d-flex flex-wrap gap-4 gap-lg-5">
        <div
          className="p-2 rounded-3 text-white d-flex flex-row justify-content-between stat__badge"
          style={{ backgroundColor: "rgba(187, 152, 255, 1)" }}
        >
          <div className="d-flex flex-column gap-2 justify-content-center ps-2">
            <p className="small">Last Round Investment</p>
            <p className="fw-semibold">₹ 584.1 M</p>
          </div>
          <img src={About1} alt="statistics" style={{ width: "80px" }} />
        </div>

        <div
          className="p-2 rounded-3 text-white d-flex justify-content-between  stat__badge"
          style={{ backgroundColor: "rgba(218, 193, 145, 1)" }}
        >
          <div className="d-flex flex-column gap-2 justify-content-center ps-2">
            <p className="small">Total Investment</p>
            <p className="fw-semibold">₹ 770.2 M</p>
          </div>
          <img src={About2} alt="statistics" style={{ width: "80px" }} />
        </div>

        <div
          className="p-2 rounded-3 text-white d-flex  justify-content-between stat__badge"
          style={{ backgroundColor: "rgba(170, 173, 185, 1)" }}
        >
          <div className="d-flex flex-column gap-2 justify-content-center ps-2">
            <p className="small">No. of Investors</p>
            <p className="fw-semibold">12</p>
          </div>
          <img src={About3} alt="statistics" style={{ width: "80px" }} />
        </div>

        <div
          className="p-2 rounded-3 text-white d-flex justify-content-between  stat__badge"
          style={{ backgroundColor: "rgba(143, 133, 255, 1)" }}
        >
          <div className="d-flex flex-column gap-2 justify-content-center ps-2">
            <p className="small">Total Secured Loans Available</p>
            <p className="fw-semibold">₹ 50 Lakhs</p>
          </div>
          <img src={About4} alt="statistics" style={{ width: "80px" }} />
        </div>
      </div>

      <h6 className="div__heading">{`Revenue Statistics (FY19)`}</h6>
      <div className="stat__row d-flex flex-wrap gap-4 gap-lg-5">
        <div
          className="p-2 rounded-3 text-white d-flex  justify-content-between stat__badge"
          style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
        >
          <div className="d-flex flex-column gap-2 justify-content-center ps-2">
            <p className="small">Revenue</p>
            <p className="fw-semibold">₹ 1.1 M</p>
          </div>
          <img src={Revenue1} alt="statistics" style={{ width: "80px" }} />
        </div>

        <div
          className="p-2 rounded-3 text-white d-flex justify-content-between  stat__badge"
          style={{ backgroundColor: "rgba(255, 115, 115, 1)" }}
        >
          <div className="d-flex flex-column gap-2 justify-content-center ps-2">
            <p className="small">PAT</p>
            <p className="fw-semibold">-₹ 2.1 M</p>
          </div>
          <img src={Revenue2} alt="statistics" style={{ width: "80px" }} />
        </div>

        <div
          className="p-2 rounded-3 text-white d-flex  justify-content-between stat__badge"
          style={{ backgroundColor: "rgba(145, 152, 218, 1)" }}
        >
          <div className="d-flex flex-column gap-2 justify-content-center ps-2">
            <p className="small">Raised Funds</p>
            <p className="fw-semibold">₹ 50 Lakhs</p>
          </div>
          <img src={Revenue3} alt="statistics" style={{ width: "80px" }} />
        </div>
      </div>
    </div>
  );
}
