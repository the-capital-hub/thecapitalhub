import express from "express";
import {
  getUsersController,
  registerUserController,
  loginUserController,
  getUserByIdController,
  updateUser,
} from "../controllers/userData.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.post("/login", loginUserController);
router.post("/createUser", registerUserController);

// Authorized routes below
router.use(authenticateToken);

// Profile Page
router.patch("/updateFounder", updateUser);

router.get("/getUser", getUsersController);
router.get("/getUserById/:id", getUserByIdController);

export default router;
