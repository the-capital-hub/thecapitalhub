import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageTitle: "",
};

export const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload;
    },
  },
});

export const { setPageTitle } = designSlice.actions;

export default designSlice.reducer;
