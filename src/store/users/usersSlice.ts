import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
  status: boolean;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [
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
    name: "meshtastic",
    email: "meshtastic@gmail.com",
    github: "meshtastic",
    status: true,
  },
  {
    id: "6",
    name: "svgdotjs",
    email: "svgdotjs@gmail.com",
    github: "svgdotjs",
    status: false,
  },
];
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUsersById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      const newState = state.filter((state) => state.id !== id);
      return newState;
    },
  },
});

export default usersSlice.reducer;
export const { deleteUsersById } = usersSlice.actions;
