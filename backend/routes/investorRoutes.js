import express from "express";
import {
  createInvestorController,
  addSectorOfInterestController,
  addStartupInvestedController,
  getInvestorByIdController,
  uploadLogoController,
  addMyInterestController,
  getOnePagerController,
} from "../controllers/investorController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/createInvestor", createInvestorController);

router.use(authenticateToken);

router.patch("/addSectorOfInterest/:investorId", addSectorOfInterestController);
router.patch("/addStartupInvested/:investorId", addStartupInvestedController);
router.get("/getInvestorById/:investorId", getInvestorByIdController);
router.post("/uploadLogo", uploadLogoController);
router.patch("/addMyInterest/:investorId", addMyInterestController);
router.get("/getOnePager/:oneLink", getOnePagerController);

export default router;