import { createSlice } from "@reduxjs/toolkit";
import { fetchAllChats } from "./chatThunks";

const initialState = {
  chatId: "",
  userId: "",
  isCommunitySelected: false,
  chatProfile: {},
  communityProfile: {},
  allChatsData: JSON.parse(localStorage.getItem("allChatsData")) || null,
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
      localStorage.setItem("allChatsData", JSON.stringify(action.payload));
    });
  },
});

// AllChatsData Selectors
export const selectIsAllChatsData = (state) =>
  state.allChatsData?.allChats === null ? false : true;
// Community Selectors
export const selectCommunities = (state) => state.allChatsData?.communities;
export const selectCommunitiesLastMessages = (state) =>
  state.allChatsData?.allCommunityChatLastMessage;
export const selectCommunitiesLastMessageDates = (state) =>
  state.allChatsData?.allCommunityChatLastMessageDates;
export const selectCommunitiesUnreadMessageCount = (state) =>
  state.allChatsData?.allCommunityChatUnreadMessageCount;

// Pinned Chat Selectors
export const selectPinnedChats = (state) => state.allChatsData?.pinnedChat;
export const selectPinnedChatsLastMessages = (state) =>
  state.allChatsData?.allPinnedChatLastMessage;
export const selectPinnedChatsLastMessageDates = (state) =>
  state.allChatsData?.allPinnedChatLastMessageDates;
export const selectPinnedChatsUnreadMessageCount = (state) =>
  state.allChatsData?.allPinnedChatUnreadMessageCount;

// Personal Chat selectors
export const selectPersonalChats = (state) => state.allChatsData?.allChats;
export const selectPersonalChatsLastMessages = (state) =>
  state.allChatsData?.allChatLastMessage;
export const selectPersonalChatsLastMessageDates = (state) =>
  state.allChatsData?.allChatLastMessageDates;
export const selectPersonalChatsUnreadMessageCount = (state) =>
  state.allChatsData?.allChatsUnreadMessageCount;

// Data for sidebar
export const selectChatsLastMessages = (state) => ({
  ...state.allChatsData?.allPinnedChatLastMessage,
  ...state.allChatsData?.allChatLastMessage,
});
export const selectChatsLastMessageDates = (state) => ({
  ...state.allChatsData?.allPinnedChatLastMessageDates,
  ...state.allChatsData?.allChatLastMessageDates,
});
export const selectChatsUnreadMessageCount = (state) => ({
  ...state.allChatsData?.allPinnedChatUnreadMessageCount,
  ...state.allChatsData?.allChatsUnreadMessageCount,
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
