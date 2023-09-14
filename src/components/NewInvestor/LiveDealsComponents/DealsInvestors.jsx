import {
  userPic1,
  userPic2,
  userPic3,
  userPic4,
  userPic5,
  userPic6,
  userPic7,
  userPic8,
} from "../../../Images/Investor/LiveDeals";
import DealsCard from "./DealsCard";

// This is mock. Can fetch Investors data here.
const dealInvestors = [
  { img: userPic1, name: "John Doe", focused: "E-Commerce" },
  { img: userPic2, name: "John Doe", focused: "Design" },
  { img: userPic3, name: "John Doe", focused: "Flash Sales" },
  { img: userPic4, name: "John Doe", focused: "Fast Moving Consumer Goods" },
  { img: userPic5, name: "John Doe", focused: "Online Travel" },
  { img: userPic6, name: "John Doe", focused: "Industries" },
  { img: userPic7, name: "John Doe", focused: "Group Buying" },
  { img: userPic8, name: "John Doe", focused: "Deals" },
];

export default function DealsInvestors() {
  return (
    <div className="deals__investors d-flex flex-column gap-4 py-3">
      <h6 className="div__heading my-2">Investors Interested</h6>
      <div className="deals__card__container d-flex flex-wrap gap-5">
        {dealInvestors.map((investor, index) => {
          return (
            <DealsCard key={`${investor.name}${index}`} image={investor.img}>
              <p>{investor.name}</p>
              <p className="fw-lighter text-black-50 small">
                <small>{investor.focused}</small>
              </p>
            </DealsCard>
          );
        })}
      </div>
    </div>
  );
}
