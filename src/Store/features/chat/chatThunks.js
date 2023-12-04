import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllChatsAPI } from "../../../Service/user";

// Thunk for allChatsData
export const fetchAllChats = createAsyncThunk("chat/getAllChats", async () => {
  try {
    const { data } = await getAllChatsAPI();
    return data;
  } catch (error) {
    console.error("Error fetching all chats data:", error);
  }
});
