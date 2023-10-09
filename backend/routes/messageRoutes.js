import express from "express";
import {
  addMessageController,
  getMessagesController,
  markMessagesAsReadController,
  getUnreadMessageCountController,
  clearAllMessagesController,
  deleteMessageController,
} from "../controllers/messageController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/addMessage", addMessageController);
router.get("/getMessages/:chatId", getMessagesController);
router.patch("/markMessagesAsRead/:chatId/:userId", markMessagesAsReadController);
router.get("/getUnreadMessageCount/:chatId/:userId", getUnreadMessageCountController);
router.patch("/clearChatMessages/:chatId", clearAllMessagesController);
router.delete("/deleteMessage/:messageId", deleteMessageController);

export default router;