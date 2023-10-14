import express from "express";
import {
  createCommunityController,
  getCommunityByIdController,
  getAllCommunitiesByUserIdController,
  getCommunitySettingsController,
  updateCommunityController,
  exitCommunityController,
  getUnAddedMembersController,
  addMembersToCommunityController,
} from "../controllers/communityController.js";

import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/createCommunity", createCommunityController);
router.get("/getCommunityById/:communityId", getCommunityByIdController);
router.get("/getAllCommunitiesByUserId/:userId", getAllCommunitiesByUserIdController);
router.get("/getCommunitySettings/:communityId", getCommunitySettingsController);
router.patch("/updateCommunity/:communityId", updateCommunityController);
router.patch("/exitCommunity/:communityId/:userId", exitCommunityController);
router.get("/getUnAddedMembers/:communityId/:userId", getUnAddedMembersController);
router.patch("/addMembersToCommunity/:communityId", addMembersToCommunityController);

export default router;