import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

// create 'register' thunk
export const register = createAsyncThunk(
  'users/register',
  async (payload) => {
    // call API to register
    const data = await userApi.register(payload)
    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    // return user data
    return data.user;
  }
)


// create 'login' thunk
export const login = createAsyncThunk(
  'users/login',
  async (payload) => {
    // call API to register
    const data = await userApi.login(payload)
    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    // return user data
    return data.user;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');

      state.current = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    }).addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    })
  },
  // extraReducers: {
  //   // register.fulfilled is string like: 'users/register/fulfilled'
  //   [register.fulfilled]: (state, action) => {
  //     state.current = action.payload;
  //   }
  // },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;