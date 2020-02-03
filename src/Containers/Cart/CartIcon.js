import React from "react";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { toggleCart } from "../../redux/actionCreators";
import { connect } from "react-redux";
const Cart = props => {
  return (
    <div className="cart" onClick={props.setCartVisibility}>
      <CartIcon className="cart-icon" />
      <span className="cart-count">0</span>
    </div>
  );
};
const mapStateToProps = state => {
  return { cartHidden: state.cart.hidden };
};

const mapDispatchToProps = dispatch => {
  return {
    setCartVisibility: () => dispatch(toggleCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
