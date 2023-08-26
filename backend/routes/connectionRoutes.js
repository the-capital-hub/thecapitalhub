import express from "express";
import {
  sendConnectionRequestController,
  getPendingConnectionRequestsController,
  acceptConnectionRequestController,
  rejectConnectionRequestController,
  getUserConnectionsController,
  removeConnectionController,
  cancelConnectionRequestController,
  getSentPendingConnectionRequestsController,
} from "../controllers/connectionController.js"; 
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.use(authenticateToken);

router.post("/sendConnectionRequest", sendConnectionRequestController);
router.get("/getSentPendingConnectionRequests/:userId", getSentPendingConnectionRequestsController);
router.delete("/cancelConnectionRequest/:connectionId", cancelConnectionRequestController);
router.get("/getPendingConnectionRequests/:userId", getPendingConnectionRequestsController);
router.patch("/acceptConnectionRequest/:connectionId", acceptConnectionRequestController);
router.patch("/rejectConnectionRequest/:connectionId", rejectConnectionRequestController);
router.get("/getUserConnections/:userId", getUserConnectionsController);
router.delete("/removeConnection/:connectionId", removeConnectionController);

export default router;
