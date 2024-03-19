import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
  status: boolean;
}

export interface UserWithId extends User {
  id: string;
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
    status: true,
  },
];
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUsersById: (state, action) => {},
  },
});

export default usersSlice.reducer;
