const initialState = {
  hidden: false,
  cartItems: []
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, hidden: !state.hidden };
    case "ADD_TO_CART":
      let itemExists = state.cartItems.find(
        item => item.id === action.payload.id
      );
      let addedCart = [];
      if (itemExists) {
        addedCart = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        );
      } else {
        addedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }
      console.log(addedCart);
      return { ...state, cartItems: [...addedCart] };
    default:
      return state;
  }
};

export default cartReducer;
