import React, { useEffect, useState } from "react";
import { getInvestorById, postInvestorData } from "../../../../Service/user";
import { useSelector } from "react-redux";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import InvestmentDetailCard from "../../InvestmentDetailCard/InvestmentDetailCard";
import linkSectorIcon from "../../../../Images/Investor/Profile/link_sector.png";
import educationIcon from "../../../../Images/Investor/Profile/iit_education.svg";
import avgInvestmentIcon from "../../../../Images/Investor/Profile/avg_investment.png";
import noOfInvestmentIcon from "../../../../Images/Investor/Profile/num_of_investments.svg";
import ticketSizeIcon from "../../../../Images/Investor/Profile/ticket_size.svg";
import seedRoundIcon from "../../../../Images/Investor/Profile/seed_round.svg";
import totalInvestmentIcon from "../../../../Images/Investor/Profile/total_investment.png";
import "./InvestmentPhilosophy.scss";
import { ModalBsLauncher } from "../../../PopUp/ModalBS";
import ExperienceModal from "./Modals/ExperienceModal/ExperienceModal";
import EducationModal from "./Modals/EducationModal/EducationModal";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function InvestmentPhilosophy() {
  // Fetch loggedInUser from global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // State for Investor
  const [investor, setInvestor] = useState(null);

  // States Investment Philosophy
  const [isInvestmentPhilosophy, setIsInvestmentPhilosophy] = useState(false);
  const [investmentPhilosophy, setInvestmentPhilosophy] = useState(null);

  useEffect(() => {
    getInvestorById(loggedInUser?.investor)
      .then(({ data }) => {
        setInvestor(data);
        setInvestmentPhilosophy(data.investmentPhilosophy || "");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loggedInUser]);

  // Submit investment Philosophy
  const submitInvestmentPhilosophyChange = async () => {
    try {
      const { data } = await postInvestorData({
        founderId: loggedInUser._id,
        investmentPhilosophy: investmentPhilosophy,
      });
      console.log(data);
      setIsInvestmentPhilosophy(!isInvestmentPhilosophy);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="investment_philosophy shadow-sm">
      <h2 className="green_underline typography">Investment Philosophy</h2>
      {investor?.founderId === loggedInUser._id && (
        <span className="ms-auto">
          <button
            className="edit_button"
            onClick={() => setIsInvestmentPhilosophy(!isInvestmentPhilosophy)}
          >
            {isInvestmentPhilosophy ? "Cancel" : "Edit"}
            <CiEdit />
          </button>
          {isInvestmentPhilosophy && (
            <button
              className="ms-2 edit_button"
              onClick={() => submitInvestmentPhilosophyChange()}
            >
              Save <CiSaveUp2 />
            </button>
          )}
        </span>
      )}
      <div className="d-flex flex-column flex-md-row gap-2 w-100 px-4 py-2">
        <p>Description: </p>
        {isInvestmentPhilosophy ? (
          <textarea
            value={investmentPhilosophy}
            name="investmentPhilosophy"
            onChange={(e) => setInvestmentPhilosophy(e.target.value)}
          />
        ) : (
          <p className="text-secondary">
            {investmentPhilosophy ||
              "Click on edit to add Investment Philosophy"}
          </p>
        )}
      </div>

      {/* Recent Experience */}
      <div className="recent_experience border rounded-4 mx-md-4 shadow-sm">
        <div className="flex-md-row header">
          <h5 className="green_underline h5">Recent Experience</h5>
          <div className="green_button">
            <ModalBsLauncher id={"experienceModal"}>
              <span>Add </span>
              <span className="d-none d-md-inline-block">Experience</span>
            </ModalBsLauncher>
          </div>
        </div>
        <div className="experience_cards">
          {/* <div className="experience_card py-2 mt-1 row row-cols-1 row-cols-md-2">
            <div className="img_container rounded d-flex align-items-center justify-content-center mx-auto col-6 col-md-2">
              <img
                className="rounded-circle"
                src={linkSectorIcon}
                height={100}
                alt="experience"
              />
            </div>
            <div className="description mt-1 mt-md-0 col-md-9 row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Company Name</p>
                <p className="m-0">The Capital HUB, India</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Location</p>
                <p className="m-0">Bangalore, India</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Experience</p>
                <p className="m-0">2Years 2 months, Present Full Time.</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Role</p>
                <p className="m-0">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="experience_card py-2 mt-1 row row-cols-1 row-cols-md-2">
            <div className="img_container rounded d-flex align-items-center justify-content-center mx-auto col-6 col-md-2">
              <img
                className="rounded-circle"
                src={linkSectorIcon}
                height={100}
                alt="experience"
              />
            </div>
            <div className="description mt-1 mt-md-0 col-md-9 row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Company Name</p>
                <p className="m-0">The Capital HUB, India</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Location</p>
                <p className="m-0">Bangalore, India</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Experience</p>
                <p className="m-0">2Years 2 months, Present Full Time.</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Role</p>
                <p className="m-0">UI/UX Designer</p>
              </div>
            </div>
          </div> */}

          {/* Loop cards here */}
          <ExperienceCard />
        </div>
      </div>

      {/* Education */}
      <div className="education border rounded-4 mx-md-4 shadow-sm">
        <div className="flex-md-row header">
          <h5 className="green_underline h5">Education</h5>
          <div className="green_button">
            <ModalBsLauncher id={"educationModal"}>
              <span>Add </span>
              <span className="d-none d-md-inline-block">Education</span>
            </ModalBsLauncher>
          </div>
        </div>
        <div className="experience_cards">
          {/* <div className="experience_card py-2 mt-1 row row-cols-1 row-cols-md-2">
            <div className="img_container rounded d-flex align-items-center justify-content-center mx-auto col-6 col-md-2">
              <img
                className="rounded-circle"
                src={educationIcon}
                height={100}
                alt="education"
              />
            </div>
            <div className="description mt-1 mt-md-0 col-md-9 row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">College Name</p>
                <p className="m-0">IIIT, India</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Location</p>
                <p className="m-0">Bangalore, India</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Passed Out</p>
                <p className="m-0">2010 - 2014</p>
              </div>
              <div className="d-flex flex-column mb-1 mb-md-3">
                <p className="text-secondary mb-1">Course</p>
                <p className="m-0">B.Tech, Computer Science And Engineering.</p>
              </div>
            </div>
          </div> */}
          {/* loop cards here */}
          <ExperienceCard isExperience={false} />
        </div>
      </div>

      {/* Investment Details */}
      <div className="investment_details_cards row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 border">
        <InvestmentDetailCard
          className="col"
          img={totalInvestmentIcon}
          title="Total Investment"
          amount="1 Crore"
        />
        <InvestmentDetailCard
          className="col"
          img={avgInvestmentIcon}
          title="Average Investment"
          amount="50 Lakhs"
        />
        <InvestmentDetailCard
          className="col"
          img={noOfInvestmentIcon}
          title="No.of Investment"
          amount="10"
        />
        <InvestmentDetailCard
          className="col"
          img={ticketSizeIcon}
          title="Minimum Tickets Size"
          amount="25 Lakhs"
        />
        <InvestmentDetailCard
          className="col"
          img={ticketSizeIcon}
          title="Maximum Tickets Size"
          amount="50 Lakhs"
        />
        <InvestmentDetailCard
          className="col"
          img={seedRoundIcon}
          title="Seed Round"
          amount="10"
        />
      </div>
      <button className="green_button btn mx-3">
        Book Your Appointment Now
      </button>

      {/* Modals */}
      <ExperienceModal />
      <EducationModal />
    </section>
  );
}
