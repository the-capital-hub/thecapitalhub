import "./ImagePlaceholder.scss";
import { camera } from "../../../Images/InvestorsView";

const ImagePlaceholder = ({ text, imageUrl }) => {
  return (
    <div className="pfp">
      <img src={camera} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default ImagePlaceholder;
