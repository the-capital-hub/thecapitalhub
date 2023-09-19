import { ChatModel } from "../models/Chat.js";
import { UserModel } from "../models/User.js";

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
    const user = await UserModel.findById(userId);
    const pinnedChatIds = user.pinnedChat

    const chats = await ChatModel.find({
      members: { $in: [userId] },
      _id: { $nin: pinnedChatIds },
    }).populate('members');

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
        status: 200,
        message: "Chat not found",
        data: [],
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

// Pin or Unpin a Chat
export const togglePinChat = async (userId, chatId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const pinnedChatIds = user.pinnedChat;
    if (pinnedChatIds.includes(chatId)) {
      user.pinnedChat = pinnedChatIds.filter((id) => id !== chatId);
    } else {
      user.pinnedChat = [...pinnedChatIds, chatId];
    }

    await user.save();

    return {
      status: 200,
      message: "Chat pinned/unpinned successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while pinning/unpinning the chat.",
    };
  }
};

// Get Pinned Chats
export const getPinnedChats = async (userId) => {
  try {
    const user = await UserModel.findById(userId).populate("pinnedChat");
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const pinnedChatIds = user.pinnedChat;
    return {
      status: 200,
      message: "Pinned chats retrieved successfully",
      data: pinnedChatIds,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while fetching pinned chats.",
    };
  }
};
