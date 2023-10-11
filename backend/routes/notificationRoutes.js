import express from "express";
import {
  getNotificationsByUserIdController,
  markMessageAsReadController,
  markAllMessagesAsReadController,
} from "../controllers/notificationController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.get("/getNotification/:userId", getNotificationsByUserIdController);
router.patch("/markMessageAsRead/:messageId", markMessageAsReadController);
router.patch("/markAllNotificationsAsRead", markAllMessagesAsReadController);

export default router;
