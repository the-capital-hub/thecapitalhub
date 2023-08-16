import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

// Cofiguration of Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };
