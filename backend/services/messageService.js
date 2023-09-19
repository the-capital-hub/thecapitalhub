import { MessageModel } from "../models/Message.js";
import { cloudinary } from "../utils/uploadImage";

export const addMessage = async (chatId, senderId, text, documents, image, video) => {
  try {
    if(image) {
      const { url } = await cloudinary.uploader.upload(image, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/posts/images`,
        format: "webp",
        unique_filename: true,
      });
      image = url;
    } 
    if (video) {
      const { url } = await cloudinary.uploader.upload(video, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/posts/videos`,
        resource_type: "video",
        unique_filename: true,
      });
      video = url;
    }
    const message = new MessageModel({
      chatId,
      senderId,
      text,
      documents,
      image,
      video
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