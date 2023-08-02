import axios from 'axios';
import API from '../api';

async function getUser() {
  try {
    const response = await axios.get(API.getUser);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function postUser(userData) {
  try {
    const response = await axios.post(API.postUser, userData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
export { getUser,postUser };
