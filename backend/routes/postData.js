import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  savePostController,
  getAllSavedPostCollectionsController,
  getSavedPostsByCollectionController,
  likeUnlikePostController,
  commentOnPostController,
  getCommentsController,
  getLikeCountController,
  getUsersWhoLikedPostController,
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
router.get("/getSavedPostCollections/:userId", getAllSavedPostCollectionsController);
router.get("/getSavedPostsByCollection/:userId", getSavedPostsByCollectionController);

router.post("/likeUnlikePost/:postId", likeUnlikePostController);
router.get('/likeCount/:postId', getLikeCountController);
router.get('/likedUsers/:postId', getUsersWhoLikedPostController);
router.post("/comment/:postId", commentOnPostController);
router.get("/getComments/:postId", getCommentsController);

export default router;
