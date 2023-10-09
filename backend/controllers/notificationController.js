import {
  getNotificationsByUserId
} from "../services/notificationService.js";

export const getNotificationsByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await getNotificationsByUserId(userId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.log(error);
    return {
      staus: 500,
      message: "An error occured while getting the notifications",
    }
  }
}