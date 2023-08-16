import { createNewPost } from "../services/postService";

export const createPost = async (req, res) => {
  // const token = req.cookies.token;
  // if (!token) res.status(401).send("You are not authenticated");
  // const { userId: user } = jwt.decode(token);
  try {
    console.log(req.body);
    const newPost = await createNewPost({
      ...req.body,
      user: "64dc5f6fa94f508667b94e63",
    });
    res.status(200).send(newPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

// export const getSinglePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     res.status(200).send(post);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// export const getPostByUser = async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) res.status(401).send("You are not authenticated");
//   else {
//     try {
//       const post = await Post.find({ createdById: req.params.id });
//       res.status(200).send(post);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   }
// };

// export const getAllPosts = async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) res.status(401).send("You are not authenticated");
//   else {
//     try {
//       const post = await Post.find();
//       res.status(200).send(post);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   }
// };

// export const getSomePosts = async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) res.status(401).send("You are not authenticated");
//   else {
//     try {
//       const posts = await Post.findById(req.params.id);
//       res.status(200).send(posts);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   }
// };
