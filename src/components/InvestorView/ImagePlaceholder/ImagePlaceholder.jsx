import "./ImagePlaceholder.scss";
import { camera } from "../../../Images/InvestorsView";

const ImagePlaceholder = ({ text, imageUrl }) => {
  return (
    <div className="pfp">
      <img src={imageUrl || camera} width={"100%"} alt="camera" />
      {text && <p>{text}</p>}
    </div>
  );
};

export default ImagePlaceholder;
