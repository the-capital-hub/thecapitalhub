import express from "express";
import {
  createChatController,
  getUserChatsController,
  findChatController,
  togglePinChatController, 
  getPinnedChatsController,
} from "../controllers/chatController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

// router.use(authenticateToken);

router.post("/createChat", createChatController);
router.get("/getUserChats/:userId", getUserChatsController);
router.get("/findChat/:firstId/:secondId", findChatController);
router.patch("/togglePin/:userId/:chatId", togglePinChatController);
router.get("/getPinnedChat/:userId", getPinnedChatsController);

export default router;