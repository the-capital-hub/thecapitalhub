import express from "express";
import { postController } from "../controllers/postController.js";
const router = express.Router();

router.post("/post", express.raw({ type: "image/*|video/*" }), postController);

export default router;
