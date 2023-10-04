import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
      state.loggedInUser = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      localStorage.removeItem("loggedInUser");
      state.loggedInUser = null;
      state.error = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("loggedInUser");
      state.loggedInUser = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
