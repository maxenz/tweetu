const initialState = {
  accounts: [
    {
      id: 1,
      name: "maxoracing",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAVOURITE_ACCOUNTS_OK":
      return {
        accounts: action.payload,
      };
    case "ADD_ACCOUNT_OK":
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    default:
      return state;
  }
};
