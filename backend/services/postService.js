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
        select: "firstName lastName designation profilePicture",
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
// export const savePostService = async (user, _id, collection) => {
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

// export const getUserSavedPosts = async (user) => {
//   try {
//     const { savedPosts, firstName } = await UserModel.findOne({
//       _id: user,
//     }).populate({
//       path: "savedPosts",
//       model: "Posts",
//       populate: {
//         path: "user",
//         model: "Users",
//         select: "firstName lastName profilePicture -_id",
//       },
//     });
//     if (!savedPosts.length) {
//       return {
//         message: "No saved Posts",
//       };
//     }
//     return {
//       data: savedPosts,
//       message: `Saved posts of ${firstName}`,
//     };
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error getting saved posts");
//   }
// };

//Like a post
export const likeUnlikePost = async (postId, userId) => {
  try {
    const post = await PostModel.findById(postId);
    if (!post) {
      return {
        status: 404,
        message: "Post not found",
      };
    }
    const hasLiked = post.likes.includes(userId);
    if (hasLiked) {
      post.likes.pull(userId);
    } else {
      post.likes.push(userId);
    }
    await post.save();
    return {
      status: 200,
      message: hasLiked ? "Post Unliked" : "Post Liked",
      data: post,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while liking/unliking the post.",
    };
  }
};

// Comment on a post
export const commentOnPost = async (postId, userId, text) => {
  try {
    const post = await PostModel.findById(postId);
    if (!post) {
      return {
        status: 404,
        message: "Post not found",
      };
    }
    const newComment = {
      user: userId,
      text,
    };
    post.comments.push(newComment);
    await post.save();
    return {
      status: 200,
      message: "Comment added successfully",
      data: post,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while adding the comment.",
    };
  }
};

// get comments by post
export const getComments = async (postId) => {
  try {
    const post = await PostModel.findById(postId).populate({
      path: "comments.user",
      model: "Users",
      select: "firstName lastName designation profilePicture",
    });
    if (!post) {
      return {
        status: 404,
        message: "Post not found",
      };
    }
    const comments = post.comments;
    return {
      status: 200,
      message: "Comments retrieved successfully",
      data: comments,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while fetching comments.",
    };
  }
};

// save post
export const savePost = async (userId, collectionName, postId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    let collection = user.savedPosts.find((c) => c.name === collectionName);

    if (!collection) {
      collection = {
        name: collectionName,
        posts: [],
      };
      collection.posts.push(postId);
      user.savedPosts.push(collection);
      await user.save();
      return {
        status: 200,
        message: "Post saved successfully",
      };
    }
    if (collection.posts.includes(postId)) {
      return {
        status: 400,
        message: "Post is already in the collection",
      };
    }
    collection.posts.push(postId);
    await user.save();
    return {
      status: 200,
      message: "Post saved successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while saving the post.",
    };
  }
};

//get all collections
export const getAllSavedPostCollections = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const collections = user.savedPosts;
    return {
      status: 200,
      message: "Saved post collections retrieved successfully",
      data: collections,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while fetching saved post collections.",
    };
  }
};

//get saved post by collection name
export const getSavedPostsByCollection = async (userId, collectionName) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const collection = user.savedPosts.find((c) => c.name === collectionName);
    if (!collection) {
      return {
        status: 404,
        message: `Collection not found`,
      };
    }
    const postIds = collection.posts;
    const savedPosts = await PostModel.find({ _id: { $in: postIds } })
      .populate({
        path: "user",
        select: "firstName lastName profilePicture designation",
      })
      .exec();
    return {
      status: 200,
      message: `Saved posts retrieved successfully`,
      data: savedPosts,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message:
        "An error occurred while fetching saved posts by collection name.",
    };
  }
};

//get like count
export const getLikeCount = async (postId) => {
  try {
    const post = await PostModel.findById(postId);
    if (!post) {
      return {
        status: 404,
        message: "Post not found",
      };
    }
    const likeCount = post.likes.length;
    return {
      status: 200,
      message: "Like count retrieved successfully",
      data: {
        count: likeCount,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while fetching like count.",
    };
  }
};

// get users who liked the post
export const getUsersWhoLikedPost = async (postId) => {
  try {
    const post = await PostModel.findById(postId);
    if (!post) {
      return {
        status: 404,
        message: "Post not found",
      };
    }
    const likedUsers = await PostModel.findById(postId).populate({
      path: "likes",
      select: "firstName lastName profilePicture",
    });
    return {
      status: 200,
      message: "Users who liked the post retrieved successfully",
      data: likedUsers.likes,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while fetching liked users.",
    };
  }
};

export const deletePost = async (postId, userId) => {
  try {
    const deletedPost = await PostModel.findOneAndDelete({
      _id: postId,
      user: userId,
    });
    if (!deletedPost) {
      return {
        status: 404,
        message: "Post not found.",
      };
    }
    return {
      status: 200,
      message: "Post Deleted Successfully",
      data: deletedPost,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while deleting posts.",
    };
  }
};
