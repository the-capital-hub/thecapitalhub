import express from "express";
import {
  createQuestionsController,
  getUnansweredQuestionController,
  answerQuestionController,
} from "../controllers/questionController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/createQuestion", createQuestionsController);

router.use(authenticateToken);

//get unanswered questions
router.get("/getQuestions/:questionType", getUnansweredQuestionController);
router.post("/answerQuestion", answerQuestionController);

export default router;