import express from "express";
const router = express.Router();
import {
  getUsersController,
  registerUserController,
  loginUserController,
} from "../controllers/userData.js";

router.post("/createUser", registerUserController);
router.get("/getUser", getUsersController);
router.post("/login", loginUserController);

export default router;
