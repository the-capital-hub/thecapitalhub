import express from "express";
import {
  createStartUpController,
  editOnePager,
  editStartUpIntroMessage,
  editStartUpOneLink,
  getOnePagerController,
  startUpData,
  investNowController,
  getStartupByFounderIdController,
} from "../controllers/startUpController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

// Create a new startUp
router.post("/createStartup", createStartUpController);


router.get("/getOnePager/:oneLink", getOnePagerController);
router.get(
  "/getStartupByFounderId/:founderId",
  getStartupByFounderIdController
);

// Middleware for checking token
router.use(authenticateToken);

// Get startup data
router.get("/details/:userId", startUpData);

// OneLink Page
router.patch("/onelink", editStartUpOneLink);
router.patch("/introMessage", editStartUpIntroMessage);
router.put("/onePager", editOnePager);

// Phase 2
// OneLink Page Data

router.post("/investNow", investNowController);

export default router;
