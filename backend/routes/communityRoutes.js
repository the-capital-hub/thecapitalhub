import express from "express";
import {
  createCommunityController,
  getCommunityByIdController,
  getAllCommunitiesByUserIdController,
} from "../controllers/communityController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/createCommunity", createCommunityController);
router.get("/getCommunityById/:communityId", getCommunityByIdController);
router.get("/getAllCommunitiesByUserId/:userId", getAllCommunitiesByUserIdController);

export default router;