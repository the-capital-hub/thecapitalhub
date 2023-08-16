import "./Card.scss";
import { threeblackdots } from "../../../Images/InvestorsView";

const Card = ({ text }) => {
  return (
    <div className="investorsCard">
      <div className="container">
        <img src={threeblackdots} alt="" />
        <div className="wrapper">
          <hr />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
