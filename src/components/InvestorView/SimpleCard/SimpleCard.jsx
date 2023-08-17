import "./SimpleCard.scss";

const SimpleCard = ({ title, text, amount }) => {
  return (
    <div className="simpleCard">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default SimpleCard;
