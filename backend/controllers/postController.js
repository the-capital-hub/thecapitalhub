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
