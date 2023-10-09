import {
  addMessage,
  getMessages,
  markMessagesAsRead,
  getUnreadMessageCount,
  clearAllMessages,
  deleteMessage,
} from "../services/messageService.js";

export const addMessageController = async (req, res) => {
  try {
    const { chatId, senderId, text, documentName, documentUrl, image, video } = req.body;
    const response = await addMessage(chatId, senderId, text, documentName, documentUrl, image, video);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while adding message.",
    });
  }
};

export const getMessagesController = async (req, res) => {
  try {
    const { chatId } = req.params;
    const response = await getMessages(chatId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting messages.",
    });
  }
};

export const markMessagesAsReadController = async (req, res) => {
  try {
    const { chatId, userId } = req.params;
    const response = await markMessagesAsRead(chatId, userId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while marking messages as read.",
    });
  }
};

export const getUnreadMessageCountController = async (req, res) => {
  try {
    const { chatId, userId } = req.params;
    const response = await getUnreadMessageCount(chatId, userId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting unread message count.",
    });
  }
};

export const clearAllMessagesController = async (req, res) => {
  try {
    const { chatId } = req.params;
    const response = await clearAllMessages(chatId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while clearing messages.",
    });
  }
};

export const deleteMessageController = async (req, res) => {
  try {
    const { messageId } = req.params;
    const response = await deleteMessage(messageId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while deleting messages.",
    });
  }
};
