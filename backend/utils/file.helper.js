import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = req.body.userId;
    const folderId = req.body.folderId;
    const userFolderPath = path.join('uploads', userId);
    const nestedFolderPath = path.join(userFolderPath, folderId);

    if (!fs.existsSync(userFolderPath)) {
      fs.mkdirSync(userFolderPath, { recursive: true });
    }

    if (!fs.existsSync(nestedFolderPath)) {
      fs.mkdirSync(nestedFolderPath, { recursive: true });
    }

    cb(null, nestedFolderPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export default multer({ storage });
