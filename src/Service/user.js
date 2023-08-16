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

async function getPdfData() {
  try {
    const response = await axiosInstance.get(API.getDocument);
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

export { getUser, postUser,postStartUpData, postUserLogin, postUserPost, getPdfData,uploadDocument};
