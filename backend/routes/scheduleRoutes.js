import express from "express";
import {
  createMeetingController,
  getAllMeetingsController,
  requestBookingSlotController,
} from "../controllers/scheduleController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.use(authenticateToken);

router.post("/createMeeting", createMeetingController);
router.get("/getAllMeetings/:oneLinkId", getAllMeetingsController);
router.get("/requestBookingSlot/:meetingId", requestBookingSlotController);

export default router;