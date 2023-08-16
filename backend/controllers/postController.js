import { postService } from "../services/postService.js";

export const postController = async (req, res) => {
  try {
    const { text } = req.body;

    // Access the uploaded files using the field names directly from the request object
    const imageFile = req.files["image"] ? req.files["image"] : null;
    const videoFile = req.files["video"] ? req.files["video"] : null;
    const documentFile = req.files["document"] ? req.files["document"] : null;

    // Call the postService to save the post data to the database
    const savedPost = await postService({
      text,
      image: imageFile,
      video: videoFile,
      document: documentFile,
    });

    res.json({ message: "Post submitted successfully!", post: savedPost });
  } catch (error) {
    console.error("Error submitting post:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the post." });
  }
};

export const createPost = async (req, res) => {
  const token = req.cookies.token;
  if (!token) res.status(401).send("You are not authenticated");
  else {
    const { userId } = jwt.decode(token);
    console.log(userId);
    try {
      const newPost = new Post({
        ...req.body,
        createdById: id,
      });
      await newPost.save();
      res.status(200).send(newPost);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getPostByUser = async (req, res) => {
  const token = req.cookies.token;
  if (!token) res.status(401).send("You are not authenticated");
  else {
    try {
      const post = await Post.find({ createdById: req.params.id });
      res.status(200).send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

export const getAllPosts = async (req, res) => {
  const token = req.cookies.token;
  if (!token) res.status(401).send("You are not authenticated");
  else {
    try {
      const post = await Post.find();
      res.status(200).send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

export const getSomePosts = async (req, res) => {
  const token = req.cookies.token;
  if (!token) res.status(401).send("You are not authenticated");
  else {
    try {
      const posts = await Post.findById(req.params.id);
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
