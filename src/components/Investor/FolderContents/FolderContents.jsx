import React from "react";
import { useParams } from "react-router-dom";

const FolderContents = () => {
  const { route } = useParams();

  return <div>{route}</div>;
};

export default FolderContents;
