import React from "react";
import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <button>Go To CheckOut</button>
    </div>
  );
};

export default CartDropdown;
