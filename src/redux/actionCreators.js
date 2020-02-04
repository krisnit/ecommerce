export const setUser = user => ({ type: "SET_CURRENT_USER", payload: user });
export const toggleCart = () => ({ type: "TOGGLE_CART" });
export const addToCart = item => ({ type: "ADD_TO_CART", payload: item });
