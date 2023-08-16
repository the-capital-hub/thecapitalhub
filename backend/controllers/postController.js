import {
  allPostsData,
  createNewPost,
  singlePostData,
} from "../services/postService";

export const createPost = async (req, res) => {
  try {
    const newPost = await createNewPost({
      ...req.body,
      user: req.userId,
    });
    res.status(200).send({
      message: "Post created succesfully",
      data: newPost,
    });
  } catch (err) {
    console.error("Error creating new post: ", err);
    res.status(500).send(err);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const data = await allPostsData();
    if (!data.length) {
      res.status(404).send({
        message: "No Posts yet",
      });
    } else {
      res.status(200).send({ message: "Posts fetched succesfully", data });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const data = await singlePostData(req.params.id);
    if (!data) {
      res.status(404).send({ message: "No post found" });
    } else {
      res.status(200).send({ message: "Post fetched succesfully", data });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
