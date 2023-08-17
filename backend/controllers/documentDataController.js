import { getDocumentList as getAllDocumentList } from "../services/documentDataService.js";
import {
  uploadDocument,
  getDocumentByUser,
  createFolder,
  getFolderByUser
} from "../services/documentDataService.js";
// Controller function to get a list of uploaded files and their names
export const getDocumentList = (req, res) => {
  const files = getAllDocumentList(req.body.userId, req.body.folderId);
  res.status(200).json({ files });
};

export const createFolderController = async (req, res) => {
  try {
    const response = await createFolder(req.body);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while creating folder.",
    });
  }
};

export const getFolderByUserController = async (req, res) => {
  try {
    const response = await getFolderByUser(req.body.userId);
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while getting folder.",
    });
  }
};

export const uploadDocumentController = async (req, res) => {
  try {
    const response = await uploadDocument(req.body);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while uploading documents.",
    });
  }
};

export const getDocumentByUserController = async (req, res) => {
  try {
    const response = await getDocumentByUser(req.body);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while getting documents.",
    });
  }
};
