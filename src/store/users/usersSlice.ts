import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
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
  },
  {
    id: "3",
    name: "FaztWeb",
    email: "fazt@gmail.com",
    github: "fazt",
  },
  {
    id: "2",
    name: "Midu",
    email: "midu@gmail.com",
    github: "midudev",
  },
  {
    id: "4",
    name: "Brais Moure",
    email: "brais@gmail.com",
    github: "mouredev",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
