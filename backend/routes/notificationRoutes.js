import express from "express";
import {
  getNotificationsByUserIdController,
  markMessageAsReadController,
} from "../controllers/notificationController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.get("/getNotification/:userId", getNotificationsByUserIdController);
router.get("/markMessageAsRead/:messageId", markMessageAsReadController);

export default router;
