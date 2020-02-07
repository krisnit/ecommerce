import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/actionCreators";
const CartDropdown = props => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.data.length > 0 ? (
          props.data.map(item => <CartItem key={item.id} {...item} />)
        ) : (
          <span className="cartEmpty">Your Cart is Empty</span>
        )}
      </div>
      {props.data.length > 0 && (
        <button
          onClick={() => {
            props.history.push("/checkout");
            props.setCartVisibility();
          }}
        >
          Go To CheckOut
        </button>
      )}
    </div>
  );
};
const mapStateToProps = state => ({ data: state.cart.cartItems });
const mapDispatchToProps = dispatch => {
  return {
    setCartVisibility: () => dispatch(toggleCart())
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
