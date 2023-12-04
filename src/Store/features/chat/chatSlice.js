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
    // allChatsData reducers
    updateLastMessage: (state, action) => {
      let localAllChatsData = JSON.parse(localStorage.getItem("allChatsData"));

      let { chatId, text } = action.payload;
      if (state.isCommunitySelected) {
        state.allChatsData.allCommunityChatLastMessage = {
          ...state.allChatsData.allCommunityChatLastMessage,
          [chatId]: text,
        };
        localAllChatsData.allCommunityChatLastMessage = {
          ...localAllChatsData.allCommunityChatLastMessage,
          [chatId]: text,
        };
      } else {
        if (
          Object.keys(state.allChatsData.allPinnedChatLastMessages).includes(
            chatId
          )
        ) {
          state.allChatsData.allPinnedChatLastMessages = {
            ...state.allChatsData.allPinnedChatLastMessages,
            [chatId]: text,
          };
          localAllChatsData.allPinnedChatLastMessages = {
            ...localAllChatsData.allPinnedChatLastMessages,
            [chatId]: text,
          };
        } else {
          state.allChatsData.allChatLastMessage = {
            ...state.allChatsData.allChatLastMessage,
            [chatId]: text,
          };
          localAllChatsData.allChatLastMessage = {
            ...localAllChatsData.allChatLastMessage,
            [chatId]: text,
          };
        }
      }
      localStorage.setItem("allChatsData", JSON.stringify(localAllChatsData));
    },
    clearAllChatsData: (state) => {
      state.allChatsData = null;
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
export const selectIsAllChatsData = (state) => Boolean(state.chat.allChatsData);
// Community Selectors
export const selectCommunities = (state) =>
  state.chat.allChatsData?.communities;
export const selectCommunitiesLastMessages = (state) =>
  state.chat.allChatsData?.allCommunityChatLastMessage;
export const selectCommunitiesLastMessageDates = (state) =>
  state.chat.allChatsData?.allCommunityChatLastMessageDates;
export const selectCommunitiesUnreadMessageCount = (state) =>
  state.chat.allChatsData?.allCommunityChatUnreadMessageCount;

// Pinned Chat Selectors
export const selectPinnedChats = (state) => state.chat.allChatsData?.pinnedChat;
export const selectPinnedChatsLastMessages = (state) =>
  state.chat.allChatsData?.allPinnedChatLastMessages;
export const selectPinnedChatsLastMessageDates = (state) =>
  state.chat.allChatsData?.allPinnedChatLastMessagesDates;
export const selectPinnedChatsUnreadMessageCount = (state) =>
  state.chat.allChatsData?.allPinnedChatUnreadMessageCount;

// Personal Chat selectors
export const selectPersonalChats = (state) => state.chat.allChatsData?.allChats;
export const selectPersonalChatsLastMessages = (state) =>
  state.chat.allChatsData?.allChatLastMessage;
export const selectPersonalChatsLastMessageDates = (state) =>
  state.chat.allChatsData?.allChatLastMessageDates;
export const selectPersonalChatsUnreadMessageCount = (state) =>
  state.chat.allChatsData?.allChatsUnreadMessageCount;

// Data for sidebar
export const selectChatsLastMessages = (state) => ({
  ...state.chat.allChatsData?.allPinnedChatLastMessages,
  ...state.chat.allChatsData?.allChatLastMessage,
});
export const selectChatsLastMessageDates = (state) => ({
  ...state.chat.allChatsData?.allPinnedChatLastMessageDates,
  ...state.chat.allChatsData?.allChatLastMessageDates,
});
export const selectChatsUnreadMessageCount = (state) => ({
  ...state.chat.allChatsData?.allPinnedChatUnreadMessageCount,
  ...state.chat.allChatsData?.allChatsUnreadMessageCount,
});

export const {
  resetChat,
  setChatId,
  setUserId,
  setIsCommuntySelected,
  setChatProfile,
  setCommunityProfile,
  updateLastMessage,
  clearAllChatsData,
} = chatSlice.actions;

export default chatSlice.reducer;
