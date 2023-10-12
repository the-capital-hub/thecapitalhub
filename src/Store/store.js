import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import chatReducer from "./features/chat/chatSlice";
import designReducer from "./features/design/designSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    design: designReducer,
  },
});
