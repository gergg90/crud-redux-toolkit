import { configureStore } from "@reduxjs/toolkit";
import usersSliceReducer from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpach = typeof store.dispatch;
