import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

const DEFAULT_STATE: UserWithId[] = [];

export interface User {
  name: string;
  email: string;
  github: string;
  status: boolean;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = (() => {
  const persistedState = window.localStorage.getItem("users");

  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      const newUser = [...state, { id, ...action.payload }];
      return newUser;
    },

    deleteUsersById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      const newState = state.filter((state) => state.id !== id);
      return newState;
    },
  },
});

export default usersSlice.reducer;
export const { deleteUsersById, createUser } = usersSlice.actions;
