// src/utils/loginSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null, // Store user details here if needed (like user ID, name, etc.)
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    islogin: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; // Optionally store user data
    },
    islogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    issetUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { islogin, logout, setUser } = loginSlice.actions;

export default loginSlice.reducer;
