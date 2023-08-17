import "./MarketCard.scss";

const MarketCard = ({ title, subtitle }) => {
  return (
    <div className="MarketCard">
      <div className="titles">
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
      </div>
      <div className="amount">
        <input type="text" placeholder="Enter Amount" />
        <span>Cr</span>
      </div>
    </div>
  );
};

export default MarketCard;
