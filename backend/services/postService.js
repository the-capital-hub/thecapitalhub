import { PostModel } from "../models/Post";
import { UserModel } from "../models/User";
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
        resource_type: "video",
        // format: "webm",
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
    const allPosts = await PostModel.find()
      .populate({
        path: "user",
        select: "firstName lastName designation profilePicture -_id",
      })
      .sort({ _id: -1 });
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

// export const savePostService = async (user, _id) => {
//   try {
//     const savedAlready = await UserModel.exists({
//       _id: user,
//       savedPosts: _id,
//     });
//     if (savedAlready) {
//       return {
//         message: "Already saved post",
//       };
//     }
//     const updatedUser = await UserModel.findOneAndUpdate(
//       { _id: user },
//       { $push: { savedPosts: _id } },
//       {
//         new: true,
//       }
//     );
//     return {
//       message: "Post saved succesfully",
//     };
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error saving post");
//   }
// };
export const savePostService = async (user, _id, collection) => {
  try {
    const savedAlready = await UserModel.exists({
      _id: user,
      savedPosts: _id,
    });
    if (savedAlready) {
      return {
        message: "Already saved post",
      };
    }
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: user },
      { $push: { savedPosts: _id } },
      {
        new: true,
      }
    );
    return {
      message: "Post saved succesfully",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error saving post");
  }
};

export const getUserSavedPosts = async (user) => {
  try {
    const { savedPosts, firstName } = await UserModel.findOne({
      _id: user,
    }).populate({
      path: "savedPosts",
      model: "Posts",
      populate: {
        path: "user",
        model: "Users",
        select: "firstName lastName profilePicture -_id",
      },
    });
    if (!savedPosts.length) {
      return {
        message: "No saved Posts",
      };
    }
    return {
      data: savedPosts,
      message: `Saved posts of ${firstName}`,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error getting saved posts");
  }
};
