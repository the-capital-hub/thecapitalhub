import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chats",
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const MessageModel = model("Messages", messageSchema);