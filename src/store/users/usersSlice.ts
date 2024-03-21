import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Germain Gutierrez",
    email: "germain.gg90@gmail.com",
    github: "gergg90",
    status: true,
  },
  {
    id: "2",
    name: "FaztWeb",
    email: "fazt@gmail.com",
    github: "fazt",
    status: false,
  },
  {
    id: "3",
    name: "Midu",
    email: "midu@gmail.com",
    github: "midudev",
    status: true,
  },
  {
    id: "4",
    name: "Brais Moure",
    email: "brais@gmail.com",
    github: "mouredev",
    status: false,
  },
  {
    id: "5",
    name: "ArisGuimera",
    email: "ArisGuimera@gmail.com",
    github: "ArisGuimera",
    status: true,
  },
  {
    id: "6",
    name: "s4vitar",
    email: "s4vitar@gmail.com",
    github: "s4vitar",
    status: false,
  },
];

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
