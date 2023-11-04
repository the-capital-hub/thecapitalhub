import { createSlice } from "@reduxjs/toolkit";
import { setThemeColor } from "../../../utils/setThemeColor";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  error: null,
  recommendations: null,
  company: null,
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
    updateLoggedInUser: (state, action) => {
      state.loggedInUser = { ...state.loggedInUser, ...action.payload };
    },
    setUserCompany: (state, action) => {
      state.company = action.payload;
    },
    updateUserCompany: (state, action) => {
      state.company = { ...state.company, ...action.payload };
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  setRecommendations,
  updateLoggedInUser,
  setUserCompany,
  updateUserCompany,
} = userSlice.actions;

// LoggedInUser selectors
export const getIsInvestor = (state) => {
  return state.user.loggedInUser.isInvestor === "true" ? true : false;
};

// company selectors
export const getCompanyName = (state) => state.user.company?.company;
export const getColorCardData = (state) => state.user.company?.colorCard;
export const getCompanyFounderId = (state) => state.user.company?.founderId;

export default userSlice.reducer;
