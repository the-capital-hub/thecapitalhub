// userReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../Action/userAction";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
      return {
        ...state,
        loggedInUser: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      localStorage.removeItem("loggedInUser");
      return {
        ...state,
        loggedInUser: null,
        error: action.payload,
      };
    case LOGOUT: // Handle the LOGOUT action
      localStorage.removeItem("loggedInUser");
      return {
        ...state,
        loggedInUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
