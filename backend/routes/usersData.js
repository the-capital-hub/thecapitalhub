import express from "express";
import {
  getUsersController,
  registerUserController,
  loginUserController,
  getUserByIdController
} from "../controllers/userData.js";
const router = express.Router();

router.post("/createUser", registerUserController);
router.get("/getUser", getUsersController);
router.post("/login", loginUserController);
router.get("/getUserById/:id", getUserByIdController);

export default router;
