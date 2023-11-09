import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageTitle: "",
  isMobileView: "",
  showOnboarding: false,
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
  },
});

// Selectors
export const selectShowOnboarding = (state) => state.design.showOnboarding;
export const selectIsMobileView = (state) => state.design.isMobileView;

export const { setPageTitle, setIsMobileView, setShowOnboarding } =
  designSlice.actions;

export default designSlice.reducer;
