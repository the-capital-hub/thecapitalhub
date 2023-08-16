import express from "express";
import { createPost } from "../controllers/postController.js";
const router = express.Router();

router.post("/newPost", createPost);
// router.get("/getsavedposts/:id", getSomePosts);
// router.get("/getpost/:id", getPostByUser);
// router.get("/getposts", getAllPosts);
// router.get("/getsinglepost/:id", getSinglePost);

export default router;
