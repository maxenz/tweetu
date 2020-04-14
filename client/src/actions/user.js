import {
  SET_USER_INFO_OK,
  LOGIN_USER_OK,
  LOGOUT_USER_OK,
  LOGIN_USER_ERROR,
  TOGGLE_FAVOURITE_ACCOUNT_OK,
  REGISTER_USER_OK,
  REGISTER_USER_ERROR,
} from "./actionTypes";
import API from "../api/index";
import * as auth from "../helpers/auth";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await API.user.login(email, password);
    auth.setTokenInLocalStorage(data.token);
    dispatch({
      type: LOGIN_USER_OK,
      payload: data.user,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER_ERROR,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await API.user.logout();
    auth.removeTokenFromLocalStorage();
    dispatch({
      type: LOGOUT_USER_OK,
    });
  } catch (e) {
    console.log(e);
  }
};

export const register = (user) => async (dispatch) => {
  try {
    const { data } = await API.user.register(user);
    auth.setTokenInLocalStorage(data.token);
    dispatch({
      type: REGISTER_USER_OK,
      payload: data.user,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: REGISTER_USER_ERROR, payload: e.response.data });
  }
};

export const setUserInfo = (user) => (dispatch) => {
  dispatch({ type: SET_USER_INFO_OK, payload: user });
};

export const toggleFavouriteAccount = (account) => async (dispatch) => {
  try {
    const { data } = await API.user.toggleFavouriteAccount(account);
    dispatch({
      type: TOGGLE_FAVOURITE_ACCOUNT_OK,
      payload: data.user,
    });
  } catch (e) {
    console.log(e);
  }
};
