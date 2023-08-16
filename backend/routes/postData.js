import express from "express";
import {
  createPost,
  getAllPosts,
  getPostByUser,
  getSinglePost,
  getSomePosts,
} from "../controllers/postController.js";
// import { postController } from "../controllers/postController.js";
const router = express.Router();

// router.post("/post", express.raw({ type: "image/*|video/*" }), postController);

router.post("/newPost", createPost);
router.get("/getsavedposts/:id", getSomePosts);
router.get("/getpost/:id", getPostByUser);
router.get("/getposts", getAllPosts);
router.get("/getsinglepost/:id", getSinglePost);

export default router;
