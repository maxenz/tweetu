import axios from "axios";

const searchAccounts = (query) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/twitter/userSearch?q=${query}`);
};

const searchTweets = (query) => {
  return axios.get(`${process.env.API_URL}/twitter/search?q=${query}`);
};

export { searchAccounts, searchTweets };
