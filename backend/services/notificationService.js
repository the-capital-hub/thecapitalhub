import { NotificationModel } from "../models/Notification.js";

export const addNotification = async (recipient, sender, type, post = null, connection = null) => {
  try {
    const notification = new NotificationModel({
      recipient,
      sender,
      type,
      post,
      connection,
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

export const markMessageAsRead = async (messageId) => {
  try {
    const notification = await NotificationModel.findOneAndUpdate(
      { _id: messageId },
      { $set: { isRead: true } },
      { new: true }
    );
    if (!notification) {
      return {
        status: 404,
        message: "Notification not found",
      };
    }
    return {
      status: 200,
      message: "Message marked as read",
      data: notification,
    };
  } catch (error) {
    return {
      status: 500,
      message: "An error occurred while marking the message as read",
    };
  }
};

