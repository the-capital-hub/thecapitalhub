import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    text: String,
  },
  {
    timestamps: true,
  }
);

const postSchema = new Schema(
  {
    category: {
      type: String,
      // required: true,
    },
    description: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    image: String,
    video: String,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

export const PostModel = model("Posts", postSchema);
