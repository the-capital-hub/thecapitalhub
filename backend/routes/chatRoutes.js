import express from "express";
import {
  createChatController,
  getUserChatsController,
  findChatController,
} from "../controllers/chatController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/createChat", createChatController);
router.get("/getUserChats/:userId", getUserChatsController);
router.get("/findChat/:firstId/:secondId", findChatController);

export default router;