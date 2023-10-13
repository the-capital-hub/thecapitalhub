import express from "express";
import {
  getUsersController,
  registerUserController,
  loginUserController,
  getUserByIdController,
  updateUser,
  updateUserByIdController,
  changePasswordController,
  requestPasswordResetController,
  resetPasswordController,
  searchUsersController,
  addEducationController,
  addExperienceController,
  addStartupToUserController,
  getExploreController,
  getExploreFiltersController,
} from "../controllers/userData.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.post("/login", loginUserController);
router.post("/createUser", registerUserController);

router.get("/getUserById/:id", getUserByIdController);

router.patch("/updateUserById/:userId", updateUserByIdController);

router.post("/requestPasswordReset", requestPasswordResetController);

router.patch("/resetPassword", resetPasswordController);

// Authorized routes below
router.use(authenticateToken);  

// Profile Page
router.patch("/updateFounder", updateUser);

router.get("/getUser", getUsersController);

router.patch("/changePassword", changePasswordController);


router.get("/search", searchUsersController);

router.patch("/addEducation/:userId", addEducationController);
router.patch("/addExperience/:userId", addExperienceController);

//add existing startups to user
router.patch("/addStartUpToUser", addStartupToUserController);

// get explore
router.get("/explore", getExploreController);
router.get("/exploreFilters", getExploreFiltersController);

export default router;
