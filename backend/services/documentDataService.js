import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import File from "../models/File.js";
import Folder from "../models/Folder.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to get a list of files in the upload directory along with their names
export const getDocumentList = () => {
  const uploadDir = path.join(__dirname, "..", "uploads");
  // const uploadDir = path.join(__dirname, "..", "uploads/"+ userId + "/" + folderId);

  try {
    const files = fs.readdirSync(uploadDir).map((file) => {
      const filePath = path.join(uploadDir, file);
      const fileData = fs.readFileSync(filePath, "utf-8"); // Assuming files are text-based, change 'utf-8' if needed
      return { name: file, data: fileData };
    });
    return files;
  } catch (error) {
    console.error("Error reading upload directory:", error);
    return [];
  }
};


export const createFolder = async (args) => {
  try {
    const { userId, folderName } = args;
    const folderExists = await Folder.findOne({ userId: userId, folderName: folderName });
    if (folderExists) {
      return {
        status: 200,
        message: "Folder Already Exists",
      };
    }
    const folder = new Folder({
      userId: userId,
      folderName: folderName,
    });
    await folder.save();
    return {
      status: 200,
      message: "Folder Created",
      data: folder
    };
  } catch (error) {
    console.error("Error creating folder:", error);
    return {
      status: 500,
      message: "An error occurred while creating folder.",
    };
  }
};

export const getFolderByUser = async (userId) => {
  try {
    const folders = await Folder.find({userId: userId});
    if(folders.length === 0) {
      return {
        status: 404,
        message: "No Folders found.",
      };
    }
    return {
      status: 200,
      message: "Folder details retrieved successfully.",
      data: folders,
    };
  } catch (error) {
    console.error("Error getting folders:", error);
    return {
      status: 500,
      message: "An error occurred while getting folders.",
    };
  }
};

export const uploadDocument = async (args) => {
  try {
    const { userId, folderId, fileUrl, fileName } = args;
    const file = new File({
      userId: userId,
      folderId: folderId,
      fileName: fileName,
      fileUrl: fileUrl,
    });
    await file.save();
    return {
      status: 200,
      message: "Document Uploaded",
    };
  } catch (error) {
    console.error("Error uploading document:", error);
    return {
      status: 500,
      message: "An error occurred while uploading documents.",
    };
  }
};

export const getDocumentByUser = async (args) => {
  try {
    const {userId, folderId} = args;
    const file = await File.find({userId: userId, folderId: folderId});
    if(!file) {
      return {
        status: 404,
        message: "Document not found.",
      };
    }
    return {
      status: 200,
      message: "Documents details retrieved successfully.",
      data: file,
    };
  } catch (error) {
    console.error("Error getting document:", error);
    return {
      status: 500,
      message: "An error occurred while getting documents.",
    };
  }
};


