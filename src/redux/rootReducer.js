import { userReducer } from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});
