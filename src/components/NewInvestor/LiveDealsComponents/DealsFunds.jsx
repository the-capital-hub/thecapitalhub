import {
  Marketing,
  Product,
  Sales,
  Team,
} from "../../../Images/Investor/LiveDeals";
import DealsCard from "./DealsCard";

// This is mock. Can fetch funds data here.
const funds = [
  { name: "Marketing", value: 30, image: Marketing },
  { name: "Product Development", value: 20, image: Product },
  { name: "Selling", value: 25, image: Sales },
  { name: "Team", value: 25, image: Team },
];

export default function DealsFunds() {
  return (
    <div className="deals__fund d-flex flex-column gap-4 py-3">
      <h6 className="div__heading my-2">Fund Utilization</h6>
      <div className="deals__card__container d-flex flex-wrap gap-5">
        {funds.map((fund, index) => {
          return (
            <DealsCard key={`${fund.name}${index}`} image={fund.image} isFunds>
              {fund.value}% {fund.name}
            </DealsCard>
          );
        })}
      </div>
    </div>
  );
}
