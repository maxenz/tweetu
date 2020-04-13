import axios from "axios";
import * as search from "./search";
import * as user from "./user";
import * as auth from "../helpers/auth";

export function makeRequest() {
  const token = auth.getTokenFromLocalStorage();
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export default {
  search,
  user,
};
