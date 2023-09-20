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
    documentName: {
      type: String,
    },
    documentUrl: {
      type: String,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const MessageModel = model("Messages", messageSchema);