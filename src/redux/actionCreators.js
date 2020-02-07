export const setUser = user => ({ type: "SET_CURRENT_USER", payload: user });
export const toggleCart = () => ({ type: "TOGGLE_CART" });
export const addToCart = item => ({ type: "ADD_TO_CART", payload: item });
export const removeItem = item => ({ type: "REMOVE_ITEM", payload: item });
export const modifyItem = item => ({ type: "MODIFY_ITEM", payload: item });
