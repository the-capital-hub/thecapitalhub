import { Schema, model } from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

export const PostModel = model("Posts", postSchema);
