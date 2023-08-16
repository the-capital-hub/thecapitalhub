import { environment } from '../environments/environment'

const baseUrl = environment.baseUrl;
const API = Object.freeze({
  getUser: `${baseUrl}/users/getUser`,
  postUser: `${baseUrl}/users/createUser`,
  postStartUpData:`${baseUrl}/startup/createStartup`,
  loginUser: `${baseUrl}/users/login`,
  postUserPost:`${baseUrl}/post/post`,
  uploadDocument:`${baseUrl}/upload`,
  getDocument:`${baseUrl}/documentation/getDocument`

  });
export default API;
