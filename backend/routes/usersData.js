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
  addUserAsInvestorController,
  validateSecretKeyController,
  createSecretKeyController,
  googleLoginController,
} from "../controllers/userData.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.post("/login", loginUserController);
router.post("/createUser", registerUserController);

router.get("/getUserById/:id", getUserByIdController);

router.patch("/updateUserById/:userId", updateUserByIdController);

router.post("/requestPasswordReset", requestPasswordResetController);

router.patch("/resetPassword", resetPasswordController);

//validate onelink secret key
router.post("/validateSecretKey", validateSecretKeyController);

router.post("/googleLogin", googleLoginController);

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
router.patch("/addUserAsInvestor", addUserAsInvestorController);

// get explore
router.get("/explore", getExploreController);
router.get("/exploreFilters", getExploreFiltersController);

//create secret key
router.post("/createSecretKey", createSecretKeyController);

export default router;
