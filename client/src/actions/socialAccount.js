import { SEARCH_SOCIAL_ACCOUNTS_OK } from "./actionTypes";

export const addAccount = () => (dispatch) => {
  dispatch({
    type: SEARCH_SOCIAL_ACCOUNTS_OK,
    payload: {
      id: 2,
      name: "Rita Bernardini",
    },
  });
};
