import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersData from "./routes/usersData.js";
import postData from "./routes/postData.js";
import documentData from "./routes/documentData.js";
import multer from "multer";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors()); // Use CORS middleware to allow requests from all origins

app.use("/users", usersData);
app.use("/post", postData);
app.use("/documentation", documentData);

// documentation upload

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  console.log(`File uploaded: ${file.originalname}`);

  // Return JSON response with the thumbnail URL or other relevant data
  res.status(200).json({
    message: "File uploaded successfully",
    thumbnailUrl: `/uploads/${file.originalname}`,
  });
});

app.get("/welcome", (req, res) => {
  res.status(200).send({ message: "Hi Welcome!" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
