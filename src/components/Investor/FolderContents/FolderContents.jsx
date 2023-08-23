import { useState } from "react";
import "./FolderContents.scss";
import { useParams } from "react-router-dom";
import HalfbendCard from "../InvestorGlobalCards/Documentation/HalfbendCard/HalfbendCard";

const FolderContents = () => {
  const [files, setFiles] = useState(["file1", "file2"]);
  const { route } = useParams();

  const title = route[0].toUpperCase() + route.slice(1);
  return (
    <div className="folderContents">
      <h1>{title}</h1>
      <HalfbendCard />
    </div>
  );
};

export default FolderContents;
