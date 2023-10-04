import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatId: "",
  userId: "",
  isCommunitySelected: false,
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
  },
});

export const { setChatId, setUserId, setIsCommuntySelected } =
  chatSlice.actions;

export default chatSlice.reducer;
