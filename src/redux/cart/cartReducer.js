const initialState = {
  hidden: false,
  cartItems: [],
  totalCount: {}
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, hidden: !state.hidden };
    case "ADD_TO_CART":
      let items = { ...state.totalCount };
      if (state.cartItems.includes(`${action.payload}`))
        items[action.payload]++;
      else items[action.payload] = 1;
      console.log(items, `${action.payload}`);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalCount: { ...state.totalCount, ...items }
      };
    default:
      return state;
  }
};

export default cartReducer;
