import { createSlice } from "@reduxjs/toolkit";

import {
  luuStoreJson,
  setCookie,
  USER_LOGIN,
  TOKEN,
  layStoreJson,
  getCookie,
  http,
} from "../../util/config.jsx";
const initialState = {
  userLogin: layStoreJson(USER_LOGIN) ? layStoreJson(USER_LOGIN) : null,
  profile: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProfileAction: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loginAction, getProfileAction } = userReducer.actions;

export default userReducer.reducer;

// ========= async actios ===========
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    let result = await http.post(`/api/Users/signin`, userLogin);
    let action = loginAction(result.data.content);
    dispatch(action);
    luuStoreJson(USER_LOGIN, result.data.content);  
    setCookie(TOKEN, result.data.content.accessToken);
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    const result = await http.post(`/api/Users/getProfile`);
    // sau khi call api thì dưa profile lên reducer
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};