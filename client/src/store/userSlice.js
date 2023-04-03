import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  name: "",
  photoUrl: "",
  modules: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      state.photoUrl = payload.photoUrl;
      state.modules = payload.modules;
    },
    logoutUser: (state) => {
      return initialState;
    },
  },
});

export const getUserStore = (state) => {
  return state.user;
};

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
