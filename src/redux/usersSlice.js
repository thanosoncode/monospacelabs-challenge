import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://thanosoncode.users.challenge.dev.monospacelabs.com/users";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error.message);
  }
});

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default usersSlice.reducer;
