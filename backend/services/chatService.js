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
    const pinnedChatIds = user.pinnedChat;

    const chats = await ChatModel.find({
      members: { $in: [userId] },
      _id: { $nin: pinnedChatIds },
    }).lean().populate('members');

    if (chats.length === 0) {
      return {
        status: 404,
        message: "Chats not found",
        data: [],
      };
    }

    const chatIds = chats.map(chat => chat._id);

    const lastMessagesPromises = chatIds.map(chatId =>
      MessageModel.findOne({ chatId }).sort({ createdAt: -1 }).limit(1).lean()
    );

    const lastMessages = await Promise.all(lastMessagesPromises);

    const chatDetails = chats.map((chat, index) => {
      return {
        chat,
        lastMessage: lastMessages[index],
      };
    });

    chatDetails.sort((a, b) => {
      if (a.lastMessage && b.lastMessage) {
        return b.lastMessage.createdAt - a.lastMessage.createdAt;
      } else if (a.lastMessage) {
        return -1;
      } else if (b.lastMessage) {
        return 1;
      }
      return 0;
    });

    return {
      status: 200,
      message: "User's Chats Retrieved",
      data: chatDetails.map((chatDetail) => chatDetail.chat),
    };
  } catch (error) {
    console.error(error);
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
    const userDetails = await UserModel.findById(userId).lean();
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

    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      update,
      { new: true, lean: true }
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
      })
      .lean();

    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    const pinnedChatIds = user.pinnedChat.map(chat => chat._id);

    const lastMessagesPromises = pinnedChatIds.map(chatId =>
      MessageModel.findOne({ chatId }).sort({ createdAt: -1 }).limit(1).lean()
    );

    const lastMessages = await Promise.all(lastMessagesPromises);

    const pinnedChatDetails = user.pinnedChat.map((chat, index) => {
      return {
        chat,
        lastMessage: lastMessages[index],
      };
    });

    pinnedChatDetails.sort((a, b) => {
      if (a.lastMessage && b.lastMessage) {
        return b.lastMessage.createdAt - a.lastMessage.createdAt;
      } else if (a.lastMessage) {
        return -1;
      } else if (b.lastMessage) {
        return 1;
      }
      return 0;
    });

    return {
      status: 200,
      message: "Pinned chats retrieved successfully",
      data: pinnedChatDetails.map((chatDetail) => chatDetail.chat),
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
    const user = await UserModel.findById(otherUserId).lean();
    const communities = await CommunityModel.find({
      members: { $all: [loggedUserId, otherUserId] },
    }).lean().populate('members');

    const mediaMessages = await MessageModel.find({
      chatId: chatId,
      $or: [
        { image: { $ne: null } },
        { video: { $ne: null } },
        { documentUrl: { $ne: null } },
      ],
    }).select('image video documentUrl');

    const images = mediaMessages.filter(message => message.image !== null);
    const videos = mediaMessages.filter(message => message.video !== null);
    const documents = mediaMessages.filter(message => message.documentUrl !== null);

    return {
      status: 200,
      message: "Chat settings retrieved successfully.",
      data: {
        user,
        communities,
        images,
        videos,
        documents,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while getting chat settings.",
    };
  }
};


// export const getAllChats = async (userId) => {
//   try {

//     // all chat
//     const user = await UserModel.findById(userId);
//     const pinnedChatIds = user.pinnedChat;

//     const chats = await ChatModel.find({
//       members: { $in: [userId] },
//       _id: { $nin: pinnedChatIds },
//     }).lean().populate('members');

//     const chatIds = chats.map(chat => chat._id);

//     const lastMessagesPromises = chatIds.map(chatId =>
//       MessageModel.findOne({ chatId }).sort({ createdAt: -1 }).limit(1).lean()
//     );

//     const lastMessages = await Promise.all(lastMessagesPromises);

//     const chatDetails = chats.map((chat, index) => {
//       return {
//         chat,
//         lastMessage: lastMessages[index],
//       };
//     });

//     chatDetails.sort((a, b) => {
//       if (a.lastMessage && b.lastMessage) {
//         return b.lastMessage.createdAt - a.lastMessage.createdAt;
//       } else if (a.lastMessage) {
//         return -1;
//       } else if (b.lastMessage) {
//         return 1;
//       }
//       return 0;
//     });

//     //pinned chat
//     const _user = await UserModel.findById(userId)
//       .populate({
//         path: "pinnedChat",
//         populate: {
//           path: "members",
//           model: "Users"
//         }
//       })
//       .lean();

//     const _pinnedChatIds = _user.pinnedChat.map(chat => chat._id);

//     const _lastMessagesPromises = _pinnedChatIds.map(chatId =>
//       MessageModel.findOne({ chatId }).sort({ createdAt: -1 }).limit(1).lean()
//     );

//     const _lastMessages = await Promise.all(_lastMessagesPromises);

//     const pinnedChatDetails = _user.pinnedChat.map((chat, index) => {
//       return {
//         chat,
//         lastMessage: _lastMessages[index],
//       };
//     });

//     pinnedChatDetails.sort((a, b) => {
//       if (a.lastMessage && b.lastMessage) {
//         return b.lastMessage.createdAt - a.lastMessage.createdAt;
//       } else if (a.lastMessage) {
//         return -1;
//       } else if (b.lastMessage) {
//         return 1;
//       }
//       return 0;
//     });

//     // communities 
//     const communities = await CommunityModel.find({ members: userId })
//       .populate({
//         path: "members",
//         model: "Users",
//         select: "firstName lastName profilePicture",
//       })
//       .lean();

//     const _chatIds = communities.map(chat => chat._id);

//     const clastMessagesPromises = _chatIds.map(chatId =>
//       MessageModel.findOne({ chatId }).sort({ createdAt: -1 }).limit(1).lean()
//     );

//     const clastMessages = await Promise.all(clastMessagesPromises);

//     const _chatDetails = communities.map((chat, index) => {
//       return {
//         chat,
//         lastMessage: clastMessages[index],
//       };
//     });

//     _chatDetails.sort((a, b) => {
//       if (a.lastMessage && b.lastMessage) {
//         return b.lastMessage.createdAt - a.lastMessage.createdAt;
//       } else if (a.lastMessage) {
//         return -1;
//       } else if (b.lastMessage) {
//         return 1;
//       }
//       return 0;
//     });

//     return {
//       status: 200,
//       data: {
//         allChats: chatDetails.map((chatDetail) => chatDetail.chat),
//         pinnedChat: pinnedChatDetails.map((chatDetail) => chatDetail.chat),
//         communities: _chatDetails.map((chatDetail) => chatDetail.chat),
//       }
//     }

//   } catch (error) {
//     console.error(error);
//     return {
//       status: 500,
//       message: "An error occurred while getting chats.",
//     };
//   }
// };

export const getAllChats = async (userId) => {
  try {
    // all chat
    const user = await UserModel.findById(userId);
    const pinnedChatIds = user.pinnedChat;

    const [chats, pinnedChats, communities] = await Promise.all([
      ChatModel.find({
        members: { $in: [userId] },
        _id: { $nin: pinnedChatIds },
      }).lean().populate('members'),

      UserModel.findById(userId)
        .populate({
          path: "pinnedChat",
          populate: {
            path: "members",
            model: "Users"
          }
        })
        .lean(),

      CommunityModel.find({ members: userId })
        .populate({
          path: "members",
          model: "Users",
          select: "firstName lastName profilePicture",
        })
        .lean()
    ]);

    const chatDetails = getChatDetails(chats, userId);
    const pinnedChatDetails = getChatDetails(pinnedChats.pinnedChat, userId);
    const communityDetails = getChatDetails(communities, userId);

    return {
      status: 200,
      data: {
        allChats: chatDetails.map((chatDetail) => chatDetail.chat),
        pinnedChat: pinnedChatDetails.map((chatDetail) => chatDetail.chat),
        communities: communityDetails.map((chatDetail) => chatDetail.chat),
      }
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while getting chats.",
    };
  }
};

const getChatDetails = (chats, userId) => {
  return chats.map((chat) => {
    const lastMessage = MessageModel.findOne({ chatId: chat._id })
      .sort({ createdAt: -1 })
      .limit(1)
      .lean()
      .populate('senderId');

    return { chat, lastMessage };
  })
    .sort((a, b) => {
      if (a.lastMessage && b.lastMessage) {
        return b.lastMessage.createdAt - a.lastMessage.createdAt;
      } else if (a.lastMessage) {
        return -1;
      } else if (b.lastMessage) {
        return 1;
      }
      return 0;
    });
};
