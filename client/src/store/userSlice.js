import { createSelector, createSlice } from "@reduxjs/toolkit";

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
    addModule: (state, { payload }) => {
      state.modules.push(payload);
    },
    addCard: (state, { payload: { moduleId, card } }) => {
      const moduleIndex = state.modules.findIndex(
        (module) => module._id === moduleId
      );
      if (moduleIndex !== -1) {
        state.modules[moduleIndex].cards.push(card);
      }
    },
  },
});

export const getUserStore = (state) => state.user;

export const getUserModules = createSelector(
  [getUserStore],
  (user) => user.modules
);

export const getCardsByModuleId = createSelector(
  [getUserModules, (state, moduleId) => moduleId],
  (modules, moduleId) => {
    const module = modules.find((module) => module._id === moduleId);
    return module ? module.cards : [];
  }
);
export const { setUser, logoutUser, addModule, addCard } = userSlice.actions;
export default userSlice.reducer;
