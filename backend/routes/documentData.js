import express from "express";
import { getDocumentList } from "../controllers/documentDataController.js";
const router = express.Router();

router.get("/getDocument", getDocumentList);

export default router;
