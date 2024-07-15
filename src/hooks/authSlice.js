// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: null,
//     user: null,
//   },
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//     },
//     clearToken: (state) => {
//       state.token = null;
//     },
//   },
// });

// export const { setToken, clearToken } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: {
    name: null,
    email: null,
    picture: null,
    sub: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    clearAuthData: (state) => {
      state.token = null;
      state.user = {
        name: null,
        email: null,
        picture: null,
        sub: null,
      };
    },
  },
});

export const { setToken, setUserData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;
