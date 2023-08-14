import { getDocumentList as getAllDocumentList } from "../services/documentDataService.js";

// Controller function to get a list of uploaded files and their names
export const getDocumentList = (req, res) => {
  const files = getAllDocumentList();
  res.status(200).json({ files });
};
