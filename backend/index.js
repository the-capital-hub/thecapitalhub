const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersData = require("./routes/usersData");
const postData = require("./routes/postData");
const documentData = require("./routes/documentData")
const multer = require("multer");

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
  res
    .status(200)
    .json({
      message: "File uploaded successfully",
      thumbnailUrl: `/uploads/${file.originalname}`,
    });
});

app.get("/welcome", (req, res) => {
  res.status(200).send({ message: "Hi Welcome!" });
});

app.listen(8081, () => {
  console.log("Running on port 8081");
});
