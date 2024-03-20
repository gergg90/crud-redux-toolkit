import { configureStore } from "@reduxjs/toolkit";
import usersSliceReducer from "./users/usersSlice";

const databaseMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("users", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    users: usersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(databaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpach = typeof store.dispatch;
