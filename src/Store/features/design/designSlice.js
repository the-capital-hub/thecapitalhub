// designSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageTitle: "",
  isMobileView: "",
  showOnboarding: false,
  showCreatePostModal: false,
  showInvestorCreatePostModal: false,
  showNotificationModal: false,


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
  },
});

// Selectors
export const selectShowOnboarding = (state) => state.design.showOnboarding;
export const selectIsMobileView = (state) => state.design.isMobileView;
export const selectCreatePostModal = (state) => state.design.showCreatePostModal;
export const selectInvestorCreatePostModal = (state) => state.design.showInvestorCreatePostModal;
export const selectNotificationtModal = (state) => state.design.showNotificationModal;



export const {
  setPageTitle,
  setIsMobileView,
  setShowOnboarding,
  toggleCreatePostModal,
  toggleinvestorCreatePostModal,
  toggleNotificationModal,
} = designSlice.actions;

export default designSlice.reducer;
