import express from "express";
const router = express.Router();
import {
  getUsersController,
  registerUserController,
  loginUserController,
} from "../controllers/userData.js";

router.get("/getUser", getUsersController);
router.post("/createUser", registerUserController);
router.post("/login", loginUserController);

export default router;
