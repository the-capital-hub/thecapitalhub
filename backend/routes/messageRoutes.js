import express from "express";
import {
  addMessageController,
  getMessagesController,
} from "../controllers/messageController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/addMessage", addMessageController);
router.get("/getMessages/:chatId", getMessagesController);

export default router;