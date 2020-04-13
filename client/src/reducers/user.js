import {
  LOGIN_USER_OK,
  LOGOUT_USER_OK,
  TOGGLE_FAVOURITE_ACCOUNT_OK,
  SET_USER_INFO_OK,
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

    default:
      return state;
  }
};
