import { createSlice } from "@reduxjs/toolkit";
import { fetchAllChats } from "./chatThunks";

const initialState = {
  chatId: "",
  userId: "",
  isCommunitySelected: false,
  chatProfile: {},
  communityProfile: {},
  allChatsData: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatId: (state, action) => {
      state.chatId = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setIsCommuntySelected: (state, action) => {
      state.isCommunitySelected = action.payload;
    },
    setChatProfile: (state, action) => {
      state.chatProfile = action.payload;
    },
    setCommunityProfile: (state, action) => {
      state.communityProfile = action.payload;
    },
    resetChat: (state) => {
      state.chatId = initialState.chatId;
      state.userId = initialState.userId;
      state.isCommunitySelected = initialState.isCommunitySelected;
      state.chatProfile = initialState.chatProfile;
      state.communityProfile = initialState.communityProfile;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllChats.fulfilled, (state, action) => {
      state.allChatsData = action.payload;
    });
  },
});

export const {
  resetChat,
  setChatId,
  setUserId,
  setIsCommuntySelected,
  setChatProfile,
  setCommunityProfile,
} = chatSlice.actions;

export default chatSlice.reducer;
