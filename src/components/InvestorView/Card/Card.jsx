import "./Card.scss";
// import { threeblackdots } from "../../../Images/InvestorsView";

const Card = ({ text, onClicked, image }) => {
  return (
    <div
      onClick={onClicked}
      className="investorsCard"
      id={text.split(" ").join("_")}
    >
      <div className="folder_container">
        <img
          src={image}
          alt={text}
          style={{ objectFit: "cover", height: "auto", width: "180px" }}
          className="align-self-center"
        />
        {/* <img src={threeblackdots} alt="" /> */}
        <div className="folder_footer">
          <hr />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
