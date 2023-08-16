import express from "express";
import { createPost, getAllPosts, getSinglePost } from "../controllers/postController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/newPost", createPost);
router.get("/getposts", getAllPosts);
router.get("/getSinglePost/:id", getSinglePost);

export default router;
