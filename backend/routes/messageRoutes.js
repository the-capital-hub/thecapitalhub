import express from "express";
import {
  addMessageController,
  getMessagesController,
  markMessagesAsReadController,
  getUnreadMessageCountController
} from "../controllers/messageController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/addMessage", addMessageController);
router.get("/getMessages/:chatId", getMessagesController);
router.patch("/markMessagesAsRead/:chatId/:userId", markMessagesAsReadController);
router.get("/getUnreadMessageCount/:chatId/:userId", getUnreadMessageCountController);

export default router;