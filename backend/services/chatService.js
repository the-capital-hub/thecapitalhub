import { ChatModel } from "../models/Chat.js";
import { UserModel } from "../models/User.js";
import { CommunityModel } from "../models/Community.js";
import { MessageModel } from "../models/Message.js";

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
    const userDetails = await UserModel.findById(userId).exec();
    if (!userDetails) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const pinnedChatIds = userDetails.pinnedChat;
    const isChatPinned = pinnedChatIds.includes(chatId);
    const update = isChatPinned
      ? { $pull: { pinnedChat: chatId } }
      : { $push: { pinnedChat: chatId } };
    const user = await UserModel.findByIdAndUpdate(
      userId,
      update,
      { new: true }
    );

    return {
      status: 200,
      message: "Chat pinned/unpinned successfully",
      data: user,
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
    const user = await UserModel.findById(userId)
      .populate({
        path: "pinnedChat",
        populate: {
          path: "members",
          model: "Users"
        }
      });

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

export const getChatSettings = async (loggedUserId, otherUserId, chatId) => {
  try {
    const user = await UserModel.findById(otherUserId);
    const communities = await CommunityModel.find({
      members: { $all: [loggedUserId, otherUserId] },
    }).populate('members');
    
    //fetch images
    const images = await MessageModel.find({
      chatId: chatId,
      image: { $ne: null }, 
    });

    // Fetch videos
    const videos = await MessageModel.find({
      chatId: chatId,
      video: { $ne: null }, 
    });

    // Fetch documents
    const documents = await MessageModel.find({
      chatId: chatId,
      documentUrl: { $ne: null },
    });
    return {
      status: 200,
      message: "Chat settings retrieved successfully.",
      data: {
        user,
        communities,
        images,
        videos,
        documents
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while getting chat settings.",
    };
  }
}