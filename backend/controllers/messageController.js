import {
  addMessage,
  getMessages,
} from "../services/messageService.js";

export const addMessageController = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;
    const response = await addMessage(chatId, senderId, text);
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
