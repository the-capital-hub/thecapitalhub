import express from "express";
const router = express.Router();
import { postController } from "../controllers/postController.js";

router.post("/post", express.raw({ type: "image/*|video/*" }), postController);

export default router;
