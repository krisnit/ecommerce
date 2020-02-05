import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";

const CartDropdown = props => {
  console.log(props);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.data.map(item => (
          <div className="cart-item" key={item.id}>
            <img alt={item.name} src={item.imageUrl} />
            <div className="item-data">
              <div>{item.name}</div>
              <div>
                {item.quantity} x ${item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>Go To CheckOut</button>
    </div>
  );
};
const mapStateToProps = state => ({ data: state.cart.cartItems });
export default connect(mapStateToProps)(CartDropdown);
