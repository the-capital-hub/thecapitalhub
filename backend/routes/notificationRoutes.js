import express from "express";
import {
  getNotificationsByUserIdController,
} from "../controllers/notificationController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.get("/getNotification/:userId", getNotificationsByUserIdController);

export default router;
