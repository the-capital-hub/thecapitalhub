import express from "express";
import {
  createPost,
  getAllPosts,
  getSavedPosts,
  getSinglePost,
  savePost,
} from "../controllers/postController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.get("/getposts", getAllPosts);
router.get("/getSinglePost/:id", getSinglePost);

// Single user routes
router.post("/newPost", createPost);
// router.patch("/oldsavePost/:postId", savePost);
router.patch("/savePost/:postId", savePost);
router.get("/savedPosts", getSavedPosts);

export default router;
