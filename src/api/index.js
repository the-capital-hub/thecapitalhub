import { environment } from '../environments/environment'

const baseUrl = environment.baseUrl;
const API = Object.freeze({
  getUser: `${baseUrl}/users/getUser`,
  postUser: `${baseUrl}/users/createUser`,
  });
export default API;
