import {
  LOGIN_USER_OK,
  LOGOUT_USER_OK,
  TOGGLE_FAVOURITE_ACCOUNT_OK,
  SET_USER_INFO_OK,
  LOGIN_USER_ERROR,
  REGISTER_USER_OK,
  REGISTER_USER_ERROR,
} from "../actions/actionTypes";
import { getTokenFromLocalStorage } from "../helpers/auth";

const token = getTokenFromLocalStorage();
const initialState = token ? { loggedIn: true } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_OK:
      return {
        ...state,
        userInfo: action.payload,
        loggedIn: true,
        loginError: false,
      };
    case LOGOUT_USER_OK:
      return {
        ...state,
        loggedIn: false,
      };
    case SET_USER_INFO_OK:
    case TOGGLE_FAVOURITE_ACCOUNT_OK:
      return {
        ...state,
        userInfo: action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginError: true,
      };

    case REGISTER_USER_OK:
      return {
        ...state,
        userInfo: action.payload,
        loggedIn: true,
        registerError: false,
      };

    case REGISTER_USER_ERROR: {
      return {
        ...state,
        registerError: action.payload,
      };
    }

    default:
      return state;
  }
};
