import express from "express";
import {
  createMeetingController,
  getAllMeetingsController,
} from "../controllers/scheduleController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.use(authenticateToken);

router.post("/createMeeting", createMeetingController);
router.get("/getAllMeetings/:oneLinkId", getAllMeetingsController);

export default router;