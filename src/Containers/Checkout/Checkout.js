import React from "react";
import "./Checkout.scss";
import { connect } from "react-redux";
import { removeItem, modifyItem } from "../../redux/actionCreators";

const Checkout = props => {
  console.log(props);
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
                onClick={() => props.modifyItem({ id: item.id, count: -1 })}
              >
                -
              </button>
              {item.quantity} <button>+</button>
            </span>
            <span>${parseFloat(item.price) * parseFloat(item.quantity)}</span>
            <button
              onClick={() => props.removeItem(item.id)}
              className="removeitem"
            >
              X
            </button>
          </div>
        ))}
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
