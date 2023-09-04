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
  updateUserById: `${baseUrl}/users/updateUserById`,
  updateIntroMessage: `${baseUrl}/startup/introMessage`,
  getSavedPosts: `${baseUrl}/api/posts/savedPosts`,
  postResetPaswordLink: `${baseUrl}/users/requestPasswordReset`,
  postNewPassword: `${baseUrl}/users/resetPassword`,
  investNow: `${baseUrl}/startUp/investNow`,
  changePassword: `${baseUrl}/users/changePassword`,
  likeUnlikePost: `${baseUrl}/api/posts/likeUnlikePost`,
  pendingConnectionRequests: `${baseUrl}/connections/getPendingConnectionRequests`,
  sentConnectionRequests: `${baseUrl}/connections/getSentPendingConnectionRequests`,
  acceptConnectionRequest: `${baseUrl}/connections/acceptConnectionRequest`,
  rejectConnectionRequest: `${baseUrl}/connections/rejectConnectionRequest`,
  getRecommendations: `${baseUrl}/connections/getRecommendations`,
  getSavedPostCollections: `${baseUrl}/api/posts/getSavedPostCollections`,
  getSavedPostsByCollection: `${baseUrl}/api/posts/getSavedPostsByCollection`,
  getCollectionsName: `${baseUrl}/connections/getUserConnections`,
  sendConnectionRequest: `${baseUrl}/connections/sendConnectionRequest`,
  sendPostComment: `${baseUrl}/api/posts/comment`,
  getPostComment:`${baseUrl}/api/posts/getComments`,

  
  cancelConnectionRequest: `${baseUrl}/connections/cancelConnectionRequest`,
});

export default API;
