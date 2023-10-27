import { createSlice } from "@reduxjs/toolkit";
import { setThemeColor } from "../../../utils/setThemeColor";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  error: null,
  recommendations: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
      state.loggedInUser = action.payload;
      setThemeColor(
        action.payload.isInvestor === "true" ? "investor" : "startup"
      );

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
      state.recommendations = null;
      setThemeColor("startup");
    },
    setRecommendations: (state, action) => {
      state.recommendations = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setRecommendations } =
  userSlice.actions;

export default userSlice.reducer;
