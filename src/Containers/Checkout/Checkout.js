import React from "react";
import "./Checkout.scss";
import { connect } from "react-redux";
import { removeItem, modifyItem } from "../../redux/actionCreators";

const Checkout = props => {
  let total = props.data.reduce((a, b) => {
    a = a + parseFloat(b.price) * parseFloat(b.quantity);
    return a;
  }, 0);

  return (
    <div className="checkout-page">
      <div className="header-block">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="checkout-items">
        {props.data.map(item => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <span>{item.name}</span>
            <span>
              <button
                onClick={() => props.modifyItem({ id: item.id, count: -1 })}>
                &#10094;
              </button>
              {item.quantity}{" "}
              <button
                onClick={() => props.modifyItem({ id: item.id, count: 1 })}>
                &#10095;
              </button>
            </span>
            <span>${parseFloat(item.price) * parseFloat(item.quantity)}</span>
            <button
              onClick={() => props.removeItem(item.id)}
              className="removeitem">
              &#10005;
            </button>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <h1>Total = ${total}</h1>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({ data: state.cart.cartItems });
const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  modifyItem: item => dispatch(modifyItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
