import { NotificationModel } from "./notificationModel";

export const addNotification = async (recipient, sender, type, post = null) => {
  try {
    const notification = new NotificationModel({
      recipient,
      sender,
      type,
      post,
    });
    await notification.save();
    return {
      status: 200,
      message: "Notification Sent",
      data: notification,
    }
  } catch (error) {
    throw error;
  }
}

