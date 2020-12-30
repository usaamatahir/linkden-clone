import { createSlice } from "@reduxjs/toolkit";
import { User, userSelect } from "../components/Types/Types";

const initialState: User = {
  user: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: User, action) => {
      state.user = action.payload;
    },
    logout: (state: User) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: userSelect) => state.user.user;

export default userSlice.reducer;
