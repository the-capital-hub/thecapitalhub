import "./ImagePlaceholder.scss";
import { camera } from "../../../Images/InvestorsView";

const ImagePlaceholder = ({ text }) => {
  return (
    <div className="pfp">
      <img src={camera} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default ImagePlaceholder;
