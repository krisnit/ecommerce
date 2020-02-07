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
      return { ...state, cartItems: [...addedCart] };
    case "REMOVE_ITEM":
      console.log(action, state.cartItems);
      let modifiedCart = state.cartItems.filter(
        item => item.id !== action.payload
      );
      return { ...state, cartItems: modifiedCart };
    case "MODIFY_ITEM":
      let modifiedItems = state.cartItems.reduce((acc, item) => {
        if (item.id === action.payload.id && parseInt(item.quantity) > 0)
          acc.push({ ...item, quantity: item.quantity + action.payload.count });
        else {
          acc.push(item);
        }
        console.log(acc);
        return acc;
      }, []);
      return { ...state, cartItems: modifiedItems };
    default:
      return state;
  }
};

export default cartReducer;
