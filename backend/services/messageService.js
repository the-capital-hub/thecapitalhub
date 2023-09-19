import { MessageModel } from "../models/Message.js";

export const addMessage = async (chatId, senderId, text) => {
  try {
    const message = new MessageModel({
      chatId,
      senderId,
      text,
    });
    await message.save();
    return {
      status: 200,
      message: "New Message added",
      data: message,
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while adding message.",
    };
  }
};

export const getMessages = async (chatId) => {
  try {
    const chats = await MessageModel.find({ chatId });
    return {
      status: 200,
      message: "Message retrived successfully",
      data: chats,
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while getting message.",
    };
  }
};

export const markMessagesAsRead = async (chatId, userId) => {
  try {
    const result = await MessageModel.updateMany(
      { chatId, senderId: userId }, { $set: { read: true } }
    );
    if (result.nModified > 0) {
      return {
        status: 200,
        message: "All messages in the chat have been marked as read.",
      };
    } else {
      return {
        status: 200,
        message: "No messages found in the chat to mark as read.",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while marking messages as read.",
    };
  }
};

export const getUnreadMessageCount = async (chatId, userId) => {
  try {
    const unreadCount = await MessageModel.countDocuments({
      chatId,
      senderId: { $ne: userId },
      read: false,
    });
    return {
      status: 200,
      message: "Unread message count retrieved successfully",
      data: unreadCount,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while getting unread message count.",
    };
  }
};