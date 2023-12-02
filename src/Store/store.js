import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import chatReducer from "./features/chat/chatSlice";
import designReducer from "./features/design/designSlice";
import oneLinkReducer from "./features/oneLink/oneLinkSlice";
import adminReducer from "./features/admin/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    design: designReducer,
    onelink: oneLinkReducer,
    admin: adminReducer,
  },
});
