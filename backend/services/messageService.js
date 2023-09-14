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