import axios from "axios";
import API from "../api";

// Helper function to get the token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("accessToken");
};

// Create an instance of Axios with default headers
const axiosInstance = axios.create({
  baseURL: API.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to include the token in the 'Authorization' header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function getUser() {
  try {
    const response = await axiosInstance.get(API.getUser);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getPdfData(userId, folderName) {
  try {
    const requestBody = {
      userId,
      folderName,
    };
    const response = await axiosInstance.post(API.getDocument, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function uploadDocument(userData) {
  try {
    const response = await axiosInstance.post(API.uploadDocument, userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postUser(userData) {
  try {
    const response = await axiosInstance.post(API.postUser, userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postStartUpData(startUpData) {
  try {
    const response = await axiosInstance.post(API.postStartUpData, startUpData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postUserLogin(userData) {
  try {
    const response = await axiosInstance.post(API.loginUser, userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function postUserPost(postData) {
  console.log("postData-->0", postData);
  try {
    const response = await axiosInstance.post(API.postUserPost, postData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
async function getAllPostsAPI() {
  try {
    const response = await axiosInstance.get(API.getAllPosts);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getOnePager(oneLink) {
  try {
    const response = await axiosInstance.get(API.getOnePager + "/" + oneLink);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getUserById(oneLink) {
  try {
    const onePager = await getOnePager(oneLink);
    const response = await axiosInstance.get(
      API.getUserById + "/" + onePager.data.founderId
    );
    response.data.data.company = onePager.data.company;
    response.data.data.location = onePager.data.location;
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// export {
//   getUser,
//   postUser,
//   postStartUpData,
//   postUserLogin,
//   postUserPost,
//   getPdfData,
//   uploadDocument,
//   getAllPostsAPI,
//   getOnePager,
//   getUserById,
// };

export const updateUserAPI = async (data) => {
  try {
    const response = await axiosInstance.patch(API.updateUser, data);
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const getStartupByFounderId = async (founderId) => {
  try {
    const response = await axiosInstance.get(
      API.getStartupByFounderId + "/" + founderId
    );
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateUserById = async (userId, data) => {
  try {
    const response = await axiosInstance.patch(
      API.updateUserById + "/" + userId,
      data
    );
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const updateIntroMsgAPI = async (newIntro) =>
  await axiosInstance.patch(API.updateIntroMessage, newIntro);

export const getSavedPostsAPI = async () =>
  await axiosInstance.get(API.getSavedPosts);

// export const savePostAPI = async (postId) => await axiosInstance

export const investNow = async (data) => {
  try {
    const response = await axiosInstance.post(API.investNow, data);
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
export const postResetPaswordLink = async (email) => {
  console.log("email-fs->", email);
  try {
    const response = await axiosInstance.post(API.postResetPaswordLink, {
      email: email, // Pass the email to the request body
    });
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const changePasswordAPI = async (newData) => {
  try {
    const { data } = await axiosInstance.patch(API.changePassword, newData);
    return data;
  } catch (error) {
    console.log(error);
    throw error?.response?.data || error;
  }
};

export const postNewPassword = async (password, token) => {
  try {
    const response = await axiosInstance.patch(API.postNewPassword, {
      token: token,
      newPassword: password,
    });
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const likeUnlikeAPI = async (postId) => {
  try {
    const response = await axiosInstance.post(
      `${API.likeUnlikePost}/${postId}`
    );
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const pendingConnectionRequestsAPI = async () => {
  try {
    const response = await axiosInstance.get(API.pendingConnectionRequests);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const acceptConnectionAPI = async (connectionId) => {
  try {
    const response = await axiosInstance.patch(
      `${API.acceptConnectionRequest}/${connectionId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const rejectConnectionAPI = async (connectionId) => {
  try {
    const response = await axiosInstance.patch(
      `${API.rejectConnectionRequest}/${connectionId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const getRecommendations = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `${API.getRecommendations}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const sentConnectionRequest = async (senderId, receiverId) => {
  try {
    const response = await axiosInstance.post(`${API.sendConnectionRequest}`, {
      senderId: senderId,
      receiverId: receiverId,
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getSentConnectionsAPI = async () => {
  try {
    const response = await axiosInstance.get(API.sentConnectionRequests);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const cancelConnectionRequestAPI = async (connectionId) => {
  try {
    const response = await axiosInstance.delete(
      `${API.cancelConnectionRequest}/${connectionId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const sendPostComment = async ({ postId, userId, text }) => {
  try {
    const response = await axiosInstance.post(
      `${API.sendPostComment}/${postId}`,
      {
        userId: userId,
        text: text,
      }
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getPostComment = async ({ postId }) => {
  try {
    const response = await axiosInstance.get(`${API.getPostComment}/${postId}`);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserConnections = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `${API.getUserConnections}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// getpost by collection name
export const getSavedPostCollections = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `${API.getSavedPostCollections}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getSavedPostsByCollection = async (userId, collectionName) => {
  try {
    const response = await axiosInstance.post(
      `${API.getSavedPostsByCollection}/${userId}`,
      {
        collectionName: collectionName,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserAndStartUpByUserIdAPI = async (userId) => {
  try {
    const { data } = await axiosInstance.get(`${API.getUserById}/${userId}`);
    return data;
  } catch (error) {
    console.error("Error getting user details:", error);
    throw error;
  }
};

export const getSearchResultsAPI = async (searchBy) => {
  try {
    const { data } = await axiosInstance.get(
      `${API.getSearchResults}?searchQuery=${searchBy}`
    );
    return data;
  } catch (error) {
    console.error("Error getting search results:", error);
    throw error;
  }
};

export const savePostByUserIdAPI = async (userId, collectionName, postId) => {
  try {
    const postdata = {
      collectionName: collectionName,
      userId: userId,
    };
    const url = `${API.savePostByUserId}/${postId}`;
    const { data } = await axiosInstance.patch(url, postdata);

    return data;
  } catch (error) {
    console.error("Error saving the post:", error);
    throw error;
  }
};

export {
  getUser,
  postUser,
  postStartUpData,
  postUserLogin,
  postUserPost,
  getPdfData,
  uploadDocument,
  getAllPostsAPI,
  getOnePager,
  getUserById,
};
export const deletePostAPI = async (postId) => {
  try {
    const { data } = await axiosInstance.delete(`${API.deletePost}/${postId}`);
    return data;
  } catch (error) {
    console.error("Error getting search results:", error);
    throw error;
  }
};

export const getUserChats = async (userId) => {
  try {
    const { data } = await axiosInstance.get(`${API.getUserChats}/${userId}`);
    return data;
  } catch (error) {
    console.error("Error getting user chats:", error);
    throw error;
  }
};

export const getMessageByChatId = async (chatId) => {
  try {
    const { data } = await axiosInstance.get(
      `${API.getMessageByChatId}/${chatId}`
    );
    return data;
  } catch (error) {
    console.error("Error getting user message:", error);
    throw error;
  }
};

export const addMessage = async (messageData) => {
  try {
    const { data } = await axiosInstance.post(`${API.addMessage}`, messageData);
    return data;
  } catch (error) {
    console.error("Error getting user message:", error);
    throw error;
  }
};

export const getSinglePostAPI = async (postId) => {
  try {
    const { data } = await axiosInstance.get(`${API.getSinglePost}/${postId}`);
    return data;
  } catch (error) {
    console.error("Error getting user message:", error);
    throw error;
  }
};

export const findChat = async (firstId, secondId) => {
  try {
    const { data } = await axiosInstance.get(
      `${API.findChat}/${firstId}/${secondId}`
    );
    return data;
  } catch (error) {
    console.error("Error getting user message:", error);
    throw error;
  }
};

export const createChat = async (senderId, recieverId) => {
  try {
    const requestData = {
      senderId,
      recieverId,
    };
    const { data } = await axiosInstance.post(`${API.createChat}`, requestData);
    return data;
  } catch (error) {
    console.error("Error getting user message:", error);
    throw error;
  }
};

export const markMessagesAsRead = async (chatId, userId) => {
  try {
    const response = await axiosInstance.patch(`${API.markMessagesAsRead}/${chatId}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error marking message as read:", error);
    throw error;
  }
};

export const getUnreadMessageCount = async (chatId, userId) => {
  try {
    const response = await axiosInstance.get(`${API.getUnreadMessageCount}/${chatId}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user message count:", error);
    throw error;
  }
};

export const togglePinMessage = async (userId, chatId) => {
  try {
    const response = await axiosInstance.patch(`${API.togglePinMessage}/${userId}/${chatId}`);
    return response.data;
  } catch (error) {
    console.error("Error while toogle pin chat:", error);
    throw error;
  }
};

export const getPinnedChat = async (userId) => {
  try {
    const response = await axiosInstance.get(`${API.getPinnedChat}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting pinned chat:", error);
    throw error;
  }
};

export const getInvestorById = async (investorId) => {
  try {
    const response = await axiosInstance.get(`${API.getInvestorById}/${investorId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user message count:", error);
    throw error;
  }
};

export const postInvestorData = async (investorData) => {
  try {
    const response = await axiosInstance.post(`${API.postInvestorData}`, investorData);
    return response.data;
  } catch (error) {
    console.error("Error posting investor data:", error);
    throw error;
  }
};

export const addStartupInvested = async (investorId, newStartUpInvestedData) => {
  try {
    const response = await axiosInstance.patch(`${API.addStartupInvested}/${investorId}`, newStartUpInvestedData);
    return response.data;
  } catch (error) {
    console.error("Error while adding startup invested:", error);
    throw error;
  }
};

export const addSectorOfInterest = async (investorId, newSectorOfInterestData) => {
  try {
    const response = await axiosInstance.patch(`${API.addSectorOfInterest}/${investorId}`, newSectorOfInterestData);
    return response.data;
  } catch (error) {
    console.error("Error while adding sector of interest:", error);
    throw error;
  }
};

export const uploadLogo = async (logo) => {
  try {
    const response = await axiosInstance.post(`${API.uploadLogo}`, logo);
    return response.data;
  } catch (error) {
    console.error("Error while uploading logo:", error);
    throw error;
  }
};

export const clearChat = async (chatId) => {
  try {
    const response = await axiosInstance.patch(`${API.clearChat}/${chatId}`);
    return response.data;
  } catch (error) {
    console.error("Error while clearing chat:", error);
    throw error;
  }
};

export const createCommunity = async (createCommunityData) => {
  try {
    const response = await axiosInstance.post(`${API.createCommunity}`,createCommunityData);
    return response.data;
  } catch (error) {
    console.error("Error while clearing chat:", error);
    throw error;
  }
};
export const getAllCommunity = async (userId) => {
  try {
    const response = await axiosInstance.get(`${API.getAllCommunity}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error while clearing chat:", error);
    throw error;
  }
};


export const addMyInterest = async (investorId, newInterestData) => {
  try {
    const response = await axiosInstance.patch(`${API.addMyInterest}/${investorId}`, newInterestData);
    return response.data;
  } catch (error) {
    console.error("Error while adding interest:", error);
    throw error;
  }
};

export const getFeaturedPost = async (userId) => {
  try {
    const response = await axiosInstance.get(`${API.getFeaturedPostsByUser}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting featured post:", error);
    throw error;
  }
};

export const addToFeaturedPost = async (postId) => {
  try {
    const response = await axiosInstance.post(`${API.addToFeaturedPost}/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error while adding featured post:", error);
    throw error;
  }
};

export const getCommunityById = async (communityId) => {
  try {
    const response = await axiosInstance.get(`${API.getCommunityById}/${communityId}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting community by id:", error);
    throw error;
  }
};

export const getChatSettings = async (loggedInUserId, otherUserId, chatId) => {
  try {
    const response = await axiosInstance.get(`${API.getChatSettings}/${loggedInUserId}/${otherUserId}/${chatId}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting chat setting:", error);
    throw error;
  }
};

export const getCommunitySettings = async (communityId) => {
  try {
    const response = await axiosInstance.get(`${API.getCommunitySettings}/${communityId}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting chat setting:", error);
    throw error;
  }
};