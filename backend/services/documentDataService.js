import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to get a list of files in the upload directory along with their names
export const getDocumentList = () => {
  const uploadDir = path.join(__dirname, "..", "uploads");

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
