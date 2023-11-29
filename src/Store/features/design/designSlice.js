// designSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageTitle: "",
  isMobileView: "",
  showOnboarding: false,
  showCreatePostModal: false,
  showInvestorCreatePostModal: false,
  showNotificationModal: false,
  isMobileApp: false,
};

export const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload;
    },
    setIsMobileView: (state, action) => {
      state.isMobileView = action.payload;
    },
    setShowOnboarding: (state, action) => {
      state.showOnboarding = action.payload;
    },
    toggleCreatePostModal: (state) => {
      state.showCreatePostModal = !state.showCreatePostModal;
    },
    toggleinvestorCreatePostModal: (state) => {
      state.showInvestorCreatePostModal = !state.showInvestorCreatePostModal;
    },
    toggleNotificationModal: (state) => {
      state.showNotificationModal = !state.showNotificationModal;
    },
    setIsMobileApp: (state, action) => {
      state.isMobileApp = action.payload;
    },
  },
});

// Selectors
export const selectShowOnboarding = (state) => state.design.showOnboarding;
export const selectIsMobileView = (state) => state.design.isMobileView;
export const selectCreatePostModal = (state) =>
  state.design.showCreatePostModal;
export const selectInvestorCreatePostModal = (state) =>
  state.design.showInvestorCreatePostModal;
export const selectNotificationtModal = (state) =>
  state.design.showNotificationModal;
export const selectIsMobileApp = (state) => state.design.isMobileApp;

export const {
  setPageTitle,
  setIsMobileView,
  setIsMobileApp,
  setShowOnboarding,
  toggleCreatePostModal,
  toggleinvestorCreatePostModal,
  toggleNotificationModal,
} = designSlice.actions;

export default designSlice.reducer;
