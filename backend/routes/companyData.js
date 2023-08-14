import express from "express";
import {
    createCompanyController,
    getOnePagerController
} from "../controllers/companyController.js";
const router = express.Router();

router.post("/createCompany", createCompanyController);
router.get("/getOnePager", getOnePagerController);

export default router;
