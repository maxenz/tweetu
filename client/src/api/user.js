import { makeRequest } from "./index";

const checkValidToken = () => {
  return makeRequest().get("/users/checkToken");
};

const login = (email, password) => {
  return makeRequest().post("/users/login", {
    email,
    password,
  });
};

const logout = () => {
  return makeRequest().post("/users/logout");
};

const register = (user) => {
  return makeRequest().post("/users", user);
};

const toggleFavouriteAccount = (account) => {
  return makeRequest().patch("/users/favourite", account);
};

export { checkValidToken, login, logout, register, toggleFavouriteAccount };
