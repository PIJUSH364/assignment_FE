import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactSlice";
import userReducer from "../features/users/userSlice";
const store = configureStore({
  reducer: {
    contact: contactReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
