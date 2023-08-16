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

export const allPostsData = async () => {
  try {
    const allPosts = await PostModel.find().sort({ _id: -1 });
    return allPosts;
  } catch (error) {
    throw new Error("Error fetching all posts");
  }
};

export const singlePostData = async (_id) => {
  try {
    const post = await PostModel.findOne({ _id });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting post");
  }
};
