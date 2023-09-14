import { ChatModel } from "../models/Chat.js";

export const createChat = async (senderId, recieverId) => {
  try {
    const existingChat = await ChatModel.findOne({
      members: { $all: [senderId, recieverId] },
    });

    if (existingChat) {
      return {
        status: 200,
        message: "Chat already exists",
      };
    }
    
    const newChat = new ChatModel({
      members: [senderId, recieverId],
    });
    await newChat.save();
    return {
      status: 200,
      message: "New Chat Created",
      data: newChat,
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while creating chat.",
    };
  }
};

export const getUserChats = async (userId) => {
  try {
    const chats = await ChatModel.find({
      members: { $in: [userId] },
    });
    if (chats.length === 0) {
      return {
        status: 404,
        message: "Chats not found",
        data: [],
      }
    }
    return {
      status: 200,
      message: "User's Chats Retrieved",
      data: chats,
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while fetching user's chats.",
    };
  }
};

export const findChat = async (firstId, secondId) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [firstId, secondId] },
    });
    if (!chat) {
      return {
        status: 404,
        message: "Chat not found",
      };
    }
    return {
      status: 200,
      message: "Chat Retrieved",
      data: chat,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while finding the chat.",
    };
  }
};