import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersData from "./routes/usersData.js";
import postData from "./routes/postData.js";
import documentData from "./routes/documentData.js";
import multer from "multer";
import connectDB from "./constants/db.js";
import globalErrorHandler from "./error/AppError.js";
import startUpData from "./routes/startUpData.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors()); // Use CORS middleware to allow requests from all origins

app.use("/users", usersData);
app.use("/post", postData);
app.use("/documentation", documentData);
app.use("/startup", startUpData);

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

app.use(globalErrorHandler);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
