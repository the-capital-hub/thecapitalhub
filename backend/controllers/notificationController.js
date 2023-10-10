import {
  getNotificationsByUserId,
  markMessageAsRead,
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

export const markMessageAsReadController = async (req, res) => {
  try {
    const { messageId } = req.params;
    const response = await markMessageAsRead(messageId);
    return res.status(response.status).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "An error occurred while marking the message as read",
    });
  }
};