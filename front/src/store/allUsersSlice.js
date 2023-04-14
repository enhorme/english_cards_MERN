import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (currentUserId, {rejectWithValue }) => {
    try {
      const response = await api.get("/user/all",{
          params:{
              _id:currentUserId || ''
          }
      });
      return response.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const fetchUserModules = createAsyncThunk(
    "users/fetchUserModules",
    async (id, { rejectWithValue }) => {
      try {
        const response = await api.get(`module/user/${id}`);
        return {modules: response.data, _id:id};
      } catch (e) {
        rejectWithValue(e);
      }
    }
);

export const allUsersSlice = createSlice({
  name: "users",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.e.message;
      }).addCase(fetchUserModules.fulfilled,(state, {payload})=>{
            state.data = state.data.map(user=>{
                if(user._id === payload._id) {
                    user.modules = payload.modules
                }
                return user
            })
    })
  },
});

export default allUsersSlice.reducer;
