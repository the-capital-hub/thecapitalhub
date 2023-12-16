import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import "./InvestmentPhilosophyForm.scss";
import SectorPreferences from "../../ProfileComponents/InvestmentPhilosophy/Components/InvestmentPhilosophyInfo/SectorPreferences/SectorPreferences";
import { PhilosophyQuestions } from "../../../../constants/Investor/ProfilePage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  selectUserInvestmentPhilosophy,
  selectUserSectorPreferences,
} from "../../../../Store/features/user/userSlice";
import { updateUserAPI } from "../../../../Service/user";
import FormTextArea from "./FormTextArea";

const STARTUP_FIELDS = [
  { name: "stage", label: "Stage" },
  { name: "age", label: "Age" },
  { name: "foundedStartup", label: "Founded Startup" },
];

export default function InvestmentPhilosophyForm() {
  const userSectorPreferences = useSelector(selectUserSectorPreferences);
  const userInvestmentPhilosophy = useSelector(selectUserInvestmentPhilosophy);

  const [selectedSectors, setSelectedSectors] = useState(userSectorPreferences);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function handlePhilosophySubmit(e) {
    e.preventDefault();

    setLoading(true);

    const {
      importanceOfManagement,
      roleAsAInvestor,
      founderAlmaMaterMatters,
      riskManagementInInvestments,
      guideOnSellingInvestments,
      timingInInvestmentDecisions,
      macroeconomicFactorsInfluenceInvestments,
      assessCompanyCompetitiveAdvantage,
      industryTrendsHoldInYourStrategy,
      evaluateCompanyGrowthPotential,
      weightGaveToTechnologicalInnovation,
    } = e.target;

    let updatedUserData = {
      investmentPhilosophy: {
        importanceOfManagement: importanceOfManagement.value,
        roleAsAInvestor: roleAsAInvestor.value,
        founderAlmaMaterMatters: founderAlmaMaterMatters.value,
        riskManagementInInvestments: riskManagementInInvestments.value,
        guideOnSellingInvestments: guideOnSellingInvestments.value,
        timingInInvestmentDecisions: timingInInvestmentDecisions.value,
        macroeconomicFactorsInfluenceInvestments:
          macroeconomicFactorsInfluenceInvestments.value,
        assessCompanyCompetitiveAdvantage:
          assessCompanyCompetitiveAdvantage.value,
        industryTrendsHoldInYourStrategy:
          industryTrendsHoldInYourStrategy.value,
        evaluateCompanyGrowthPotential: evaluateCompanyGrowthPotential.value,
        weightGaveToTechnologicalInnovation:
          weightGaveToTechnologicalInnovation.value,
      },
      sectorPreferences: selectedSectors,
    };

    console.log("phil form submitted", updatedUserData);
    // Update User data
    try {
      const { data } = await updateUserAPI(updatedUserData);
      console.log("post Investor user data", data);
      dispatch(loginSuccess(data.data));
    } catch (error) {
      console.error("Error saving Investment Philosophy(user)", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form
      onSubmit={handlePhilosophySubmit}
      className="investment-philosophy-form px-3 px-lg-4 pb-4"
    >
      {/* Startp information */}
      <div
        className="d-flex align-items-center gap-4 flex-wrap"
        style={{ gridColumn: "1/-1" }}
      >
        {STARTUP_FIELDS.map(({ name, label }) => {
          return (
            <Form.Group
              controlId={`onelink-${name}`}
              className="flex-grow-1 form-group"
              key={name}
            >
              <Form.Label>{label}</Form.Label>
              <Form.Control type="text" name={name} defaultValue={label} />
            </Form.Group>
          );
        })}
      </div>

      {/* Select field */}
      <fieldset className="" style={{ gridColumn: "1/-1" }}>
        <legend>What are your Industries of preference?</legend>
        <SectorPreferences
          isEditing={true}
          setSelectedSectors={setSelectedSectors}
        />
      </fieldset>

      {/* Philosophy Questions */}
      {Object.keys(PhilosophyQuestions).map((question) => {
        return (
          <FormTextArea
            key={question}
            defaultValue={
              userInvestmentPhilosophy ? userInvestmentPhilosophy[question] : ""
            }
            label={PhilosophyQuestions[question]}
            name={question}
            controlId={`onelink-${question}`}
            // wordLimit={2}
          />
        );
      })}

      {/* Revenue */}
      <div className="d-flex flex-column" style={{ gridColumn: "1/-1" }}>
        <div className="revenue-display">
          <h5>Revenue</h5>
        </div>
        <div className="revenue-inputs d-flex flex-column flex-md-row align-items-center gap-4">
          <Form.Group controlId="onelink-revenueYear" className="form-group">
            <Form.Label className="">Year</Form.Label>
            <Form.Control
              type="number"
              min={2010}
              max={+String(new Date().getFullYear())}
              name="revenueYear"
              className="revenueYear"
            />
          </Form.Group>
          <Form.Group controlId="onelink-revenueAmount" className="form-group">
            <Form.Label className="">Amount</Form.Label>
            <InputGroup className="justify-content-center">
              <InputGroup.Text
                className="text-bg-dark text-align-center d-block"
                style={{ flex: "0 0 40px" }}
              >
                ₹
              </InputGroup.Text>
              <Form.Control
                type="number"
                min={0}
                name="revenueAmount"
                className="revenueAmount"
              />
            </InputGroup>
          </Form.Group>
          <Button variant="investor" className="align-self-start">
            Add
          </Button>
        </div>
      </div>

      {/* Action button */}
      <div className="d-flex" style={{ gridColumn: "1/-1" }}>
        <Button
          type="submit"
          variant="investor"
          className="ms-auto d-flex align-items-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size="sm" variant="black" />
              {"Saving..."}
            </>
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </Form>
  );
}
