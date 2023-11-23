import { createSlice } from "@reduxjs/toolkit";
import { setThemeColor } from "../../../utils/setThemeColor";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  error: null,
  recommendations: null,
  company: null,
  unreadNotifications: null,
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
      state.company = null;
      setThemeColor("startup");
    },
    setRecommendations: (state, action) => {
      state.recommendations = action.payload;
    },
    updateLoggedInUser: (state, action) => {
      state.loggedInUser = { ...state.loggedInUser, ...action.payload };
      let userData = JSON.parse(localStorage.getItem("loggedInUser"));
      userData = { ...userData, ...action.payload };
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
    },
    setUserCompany: (state, action) => {
      state.company = action.payload;
    },
    updateUserCompany: (state, action) => {
      state.company = { ...state.company, ...action.payload };
    },
    setUnreadNotifications: (state, action) => {
      state.unreadNotifications = action.payload;
    },
    decrementUnreadNotifications: (state, action) => {
      state.unreadNotifications = state.unreadNotifications - 1;
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
  setUnreadNotifications,
  decrementUnreadNotifications,
} = userSlice.actions;

// LoggedInUser state selectors
export const selectIsInvestor = (state) => {
  return state.user.loggedInUser.isInvestor === "true" ? true : false;
};
export const selectLoggedInUserId = (state) => state.user.loggedInUser._id;
export const selectUserProfilePicture = (state) =>
  state.user.loggedInUser.profilePicture;
export const selectUserOneLinkId = (state) => state.user.loggedInUser.oneLinkId;
export const selectUserInvestor = (state) => state.user.loggedInUser?.investor;
export const selectUserRecentExperience = (state) =>
  state.user.loggedInUser.recentExperience;
export const selectUserRecentEducation = (state) =>
  state.user.loggedInUser.recentEducation;

// unread Notifications selector
export const selectUnreadNotifications = (state) =>
  state.user.unreadNotifications;

// Investment philosophy selectors
export const selectUserSectorPreferences = (state) =>
  state.user.loggedInUser.sectorPreferences;
export const selectImportanceOfManagament = (state) =>
  state.user.loggedInUser.importanceOfManagament;
export const selectRoleAsAInvestor = (state) =>
  state.user.loggedInUser.roleAsAInvestor;
export const selectFounderAlmaMaterMatters = (state) =>
  state.user.loggedInUser.founderAlmaMaterMatters;
export const selectRiskManagementInInvestments = (state) =>
  state.user.loggedInUser.riskManagementInInvestments;
export const selectGuideOnSellingInvestments = (state) =>
  state.user.loggedInUser.guideOnSellingInvestments;
export const selectTimingInInvestmentDecisions = (state) =>
  state.user.loggedInUser.timingInInvestmentDecisions;
export const selectMacroeconomicFactorsInfluenceInvestments = (state) =>
  state.user.loggedInUser.macroeconomicFactorsInfluenceInvestments;
export const selectAssessCompanyCompetitiveAdvantage = (state) =>
  state.user.loggedInUser.assessCompanyCompetitiveAdvantage;
export const selectIndustryTrendsHoldInYourStrategy = (state) =>
  state.user.loggedInUser.industryTrendsHoldInYourStrategy;
export const selectEvaluateCompanyGrowthPotential = (state) =>
  state.user.loggedInUser.evaluateCompanyGrowthPotential;
export const selectWeightGaveToTechnologicalInnovation = (state) =>
  state.user.loggedInUser.weightGaveToTechnologicalInnovation;

// company state selectors
export const selectUserCompanyData = (state) => state.user.company;
export const selectCompanyName = (state) =>
  state.user.loggedInUser.isInvestor === "true"
    ? state.user.company?.companyName
    : state.user.company?.company;
export const selectColorCardData = (state) => state.user.company?.colorCard;
export const selectCompanyFounderId = (state) => state.user.company?.founderId;
export const selectUserStartupsInvested = (state) =>
  state.user.company?.startupsInvested;
export const selectUserSectorInterested = (state) =>
  state.user.company?.sectorInterested;
// export const selectUserInvestmentPhilosophy = (state) =>
//   state.user.company?.investmentPhilosophy;

export default userSlice.reducer;
