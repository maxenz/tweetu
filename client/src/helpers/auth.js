const tokenKey = "tweetu_token";

const getTokenFromLocalStorage = () => JSON.parse(localStorage.getItem(tokenKey));
const setTokenInLocalStorage = (token) =>
  localStorage.setItem(tokenKey, JSON.stringify(token));
const removeTokenFromLocalStorage = () => localStorage.removeItem(tokenKey);

export {
  getTokenFromLocalStorage,
  setTokenInLocalStorage,
  removeTokenFromLocalStorage,
};
