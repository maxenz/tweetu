import { combineReducers } from "redux";
import user from "./user";
import socialAccount from "./socialAccount";
export default combineReducers({
  user,
  socialAccount,
});
