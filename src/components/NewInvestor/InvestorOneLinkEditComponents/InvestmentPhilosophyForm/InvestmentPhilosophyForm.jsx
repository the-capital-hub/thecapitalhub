import { Form } from "react-bootstrap";
import "./InvestmentPhilosophyForm.scss";
import SectorPreferences from "../../ProfileComponents/InvestmentPhilosophy/Components/InvestmentPhilosophyInfo/SectorPreferences/SectorPreferences";
import { PhilosophyQuestions } from "../../../../constants/Investor/ProfilePage";

export default function InvestmentPhilosophyForm() {
  async function handlePhilosophySubmit(e) {
    e.preventDefault();
    console.log("phil form submitted");
  }

  return (
    <Form
      onSubmit={handlePhilosophySubmit}
      className="investment-philosophy-form px-3 px-lg-4 pb-4"
    >
      {/* Select field */}
      <fieldset className="" style={{ gridColumn: "1/-1" }}>
        <legend>What are your Industries of preference?</legend>
        <SectorPreferences
          isEditing={true}
          //   setSelectedSectors={setSelectedSectors}
        />
      </fieldset>

      {Object.keys(PhilosophyQuestions).map((question) => {
        return (
          <Form.Group
            controlId={`onelink-${question}`}
            className="form-group"
            key={question}
          >
            <Form.Label className="">
              {PhilosophyQuestions[question]}
            </Form.Label>
            <Form.Control as={"textarea"} rows={5} name="question" />
          </Form.Group>
        );
      })}
    </Form>
  );
}
