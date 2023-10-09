import { NotificationModel } from "../models/Notification.js";

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

export const getNotificationsByUserId = async (userId) => {
  try {
    const notifications = await NotificationModel.find({ recipient: userId })
      .populate("sender", "firstName lastName");
    return {
      status: 200,
      message: "Notification retrived",
      data: notifications
    }
  } catch (error) {
    return {
      status: 500,
      message: "An error occured while getting the notifications",
    }
  }
}
