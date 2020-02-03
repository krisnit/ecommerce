const initialState = { user: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
