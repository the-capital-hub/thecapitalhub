import { Schema, model } from "mongoose";

const folderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    folderName: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const FolderModel = model("Folders", folderSchema);

export default FolderModel;
