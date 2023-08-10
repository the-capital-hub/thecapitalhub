import { Schema, model } from "mongoose";

const fileSchema = new Schema({
  originalname: { type: String, required: true },
  mimetype: { type: String, required: true },
  size: { type: Number, required: true },
});

const FileModel = model("File", fileSchema);

export default FileModel;
