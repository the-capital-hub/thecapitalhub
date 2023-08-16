import express from "express";
import {
  getUsersController,
  registerUserController,
  loginUserController,
  getUserByIdController,
  updateUser,
} from "../controllers/userData.js";
const router = express.Router();

// Profile Page
router.patch("/updateFounder", updateUser);

router.post("/createUser", registerUserController);
router.get("/getUser", getUsersController);
router.post("/login", loginUserController);
router.get("/getUserById/:id", getUserByIdController);

export default router;
