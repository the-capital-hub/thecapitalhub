import { Schema, model } from "mongoose";

const fileSchema = new Schema(
  {
    // originalname: { type: String, required: true },
    // mimetype: { type: String, required: true },
    // size: { type: Number, required: true },
    userId: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    folderId: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const FileModel = model("Files", fileSchema);

export default FileModel;
