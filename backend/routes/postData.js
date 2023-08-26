import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  savePostController,
  likeUnlikePostController,
  commentOnPostController,
  getCommentsController,
} from "../controllers/postController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

// router.use(authenticateToken);

router.get("/getposts", getAllPosts);
router.get("/getSinglePost/:id", getSinglePost);

// Single user routes
router.post("/newPost", createPost);
// router.patch("/oldsavePost/:postId", savePost);
router.patch("/savePost/:postId", savePostController);
// router.get("/savedPosts", getSavedPosts);

router.post("/likeUnlikePost/:postId", likeUnlikePostController);
router.post("/comment/:postId", commentOnPostController);
router.get("/getComments/:postId", getCommentsController);

export default router;
