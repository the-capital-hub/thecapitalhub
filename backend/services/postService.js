import { PostModel } from "../models/Post";
import { cloudinary } from "../utils/uploadImage";

export const createNewPost = async (data) => {
  try {
    if (data?.image) {
      const { url } = await cloudinary.uploader.upload(data.image, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/posts/images`,
        format: "webp",
        unique_filename: true,
      });
      data.image = url;
    }
    if (data?.video) {
      const { url } = await cloudinary.uploader.upload(data.video, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/posts/videos`,
        format: "webm",
        unique_filename: true,
      });
      data.video = url;
    }
    const newPost = new PostModel(data);
    await newPost.save();
    return newPost;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating new post");
  }
};
