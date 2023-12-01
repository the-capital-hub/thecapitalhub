import { NotificationModel } from "../models/Notification.js";
import { PostModel } from "../models/Post.js";

export const addNotification = async (recipient, sender, type, post = null, connection = null, meetingId = null, achievementId = null) => {
  try {
    const notification = new NotificationModel({
      recipient,
      sender,
      type,
      post,
      connection,
      meetingId,
      achievementId,
    });
    if (sender === recipient) {
      return;
    }
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
      .populate({
        path: "sender",
        select: "firstName lastName profilePicture",
      })
      .populate({
        path: "achievementId",
        select: "title description badge",
      })
      .sort({ _id: -1 });

    const filteredNotifications = await Promise.all(
      notifications.map(async (notification) => {
        if (notification.post) {
          const postExists = await PostModel.exists({ _id: notification.post });
          if (!postExists) {
            return null;
          }
        }
        return notification;
      })
    );

    const validNotifications = filteredNotifications.filter((notification) => notification !== null);

    return {
      status: 200,
      message: "Notifications retrieved",
      data: validNotifications,
    };
  } catch (error) {
    return {
      status: 500,
      message: "An error occurred while getting the notifications",
    };
  }
};



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

export const markAllMessagesAsRead = async (userId) => {
  try {
    const result = await NotificationModel.updateMany(
      { recipient: userId },
      { $set: { isRead: true } }
    );
    if (result.nModified === 0) {
      return {
        status: 404,
        message: "No unread notifications found for the user",
      };
    }
    return {
      status: 200,
      message: "All messages marked as read",
    };
  } catch (error) {
    return {
      status: 500,
      message: "An error occurred while marking all messages as read",
    };
  }
};

export const deleteNotification = async (recipient, sender, type, id) => {
  try {
    const result = await NotificationModel.deleteMany({
      $and: [
        {
          $or: [
            { connection: id },
            { post: id },
            { meetingId: id },
          ],
        },
        { recipient, sender, type },
      ],
    });
    if (result.deletedCount === 0) {
      return {
        status: 200,
        message: "No notifications found for the given ID and recipients",
      };
    }
    return {
      status: 200,
      message: "Notifications deleted successfully by connection or post ID and recipients",
    };
  } catch (error) {
    throw error;
  }
};

export const getUnreadNotificationCount = async (userId) => {
  try {
    const unreadCount = await NotificationModel.countDocuments({
      recipient: userId,
      isRead: false,
    });
    return {
      status: 200,
      message: "Unread notification count retrieved",
      data: { unreadCount },
    };
  } catch (error) {
    return {
      status: 500,
      message: "An error occurred while getting the unread notification count",
    };
  }
};