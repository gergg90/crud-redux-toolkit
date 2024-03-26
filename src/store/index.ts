import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersSliceReducer from "./users/usersSlice";

const databaseMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("users", JSON.stringify(store.getState()));
};

const syncWithData: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;

  if (type === "users/deleteUsersById") {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`User ID: ${payload} successfully deleted`);
        }
      })
      .catch((e) => {
        console.log(`ERROR: -----> ${e}`);
      });
  }

  console.log({ type });

  if (type === "users/createUser") {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`User ${payload.email} saved successfully`);
        }
      })
      .catch((e) => {
        console.log(`ERROR: -----> ${e}`);
      });
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    users: usersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(databaseMiddleware, syncWithData),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpach = typeof store.dispatch;
