import DealsHeader from "../../../components/NewInvestor/LiveDealsComponents/DealsHeader";
import DealsOverview from "../../../components/NewInvestor/LiveDealsComponents/DealsOverview";
import DealsInvestors from "../../../components/NewInvestor/LiveDealsComponents/DealsInvestors";
import DealsFunds from "../../../components/NewInvestor/LiveDealsComponents/DealsFunds";

export default function DealsCompany({ company }) {
  return (
    <div className="bg-white border rounded-4 p-5 m-3">
      <DealsHeader
        image={company.image}
        name={company.name}
        motto={company.motto}
      />

      <DealsOverview name={company.name} about={company.about} />

      <DealsInvestors />

      <DealsFunds />
    </div>
  );
}
