import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chats",
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
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