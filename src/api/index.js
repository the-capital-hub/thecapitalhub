import { environment } from "../environments/environment";

const baseUrl = environment.baseUrl;
const API = Object.freeze({
  getUser: `${baseUrl}/users/getUser`,
  postUser: `${baseUrl}/users/createUser`,
  postStartUpData: `${baseUrl}/startup/createStartup`,
  loginUser: `${baseUrl}/users/login`,
  postUserPost: `${baseUrl}/api/posts/newPost`,
  uploadDocument: `${baseUrl}/upload`,
  getDocument: `${baseUrl}/documentation/getDocumentsByUser`,
  getAllPosts: `${baseUrl}/api/posts/getposts`,
  updateUser: `${baseUrl}/users/updateFounder`,
  getOnePager: `${baseUrl}/startUp/getOnePager`,
  getUserById: `${baseUrl}/users/getUserById`,
  getStartupByFounderId: `${baseUrl}/startup/getStartupByFounderId`,
  updateUserById: `${baseUrl}/users/updateUserById`
});

export default API;
