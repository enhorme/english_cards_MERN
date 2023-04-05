import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../services/api/api";

export const editCard = createAsyncThunk(
  "cards/editCard",
  async ({ cardId, front, back }) => {
    try {
      const res = await api.patch(`/cards/${cardId}`, {
        front,
        back,
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }
);

export const postCards = createAsyncThunk(
  "cards/postCards",
  async ({ dataRef, id }, { rejectWithValue }) => {
    try {
      const { front, back } = dataRef;

      const data = [...front].reduce((acc, el, idx) => {
        acc.push({
          front: el.value,
          back: back[idx].value,
        });
        return acc;
      }, []);
      const res = await api.post(`module/${id}/cards`, {
        cards: data,
      });

      if (res.data) {
        return { moduleId: id, cards: res.data };
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        postCards.fulfilled,
        (state, { payload: { moduleId, cards } }) => {
          const moduleIndex = state.modules.findIndex(
            (module) => module._id === moduleId
          );
          console.log(moduleIndex);
          if (moduleIndex !== -1) {
            state.modules[moduleIndex].cards.push(...cards);
          }
        }
      )
      .addCase(editCard.fulfilled, (state, action) => {
        const { card } = action.payload;
        const moduleId = card.module[0];
        const moduleIndex = state.modules.findIndex(
          (module) => module._id === moduleId
        );
        if (moduleIndex !== -1) {
          const cardIndex = state.modules[moduleIndex].cards.findIndex(
            (el) => el._id === card._id
          );
          state.modules[moduleIndex].cards[cardIndex] = { ...card };
        }
      });
  },
});

export const getUserStore = (state) => state.user;

export const getUserModules = createSelector([getUserStore], (user) => {
  return user.modules;
});

export const getCardsByModuleId = createSelector(
  [getUserModules, (_, moduleId) => moduleId],
  (modules, moduleId) => {
    const module = modules.find((module) => module._id === moduleId);
    return module ? module.cards : [];
  }
);

export const { setUser, logoutUser, addModule } = userSlice.actions;
export default userSlice.reducer;
